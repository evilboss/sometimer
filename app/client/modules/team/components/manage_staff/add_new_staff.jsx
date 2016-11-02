import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import {control} from '/lib/access-control/control';
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
import UploadFile from '/client/modules/team/components/upload_file';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

class AddNewStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: [],
      details: 'Department',
    }
  }

  componentDidMount() {
    $('select').material_select(this.change.bind(this));
  }

  _create() {
    let {create} = this.props;
    let {firstName, lastName, department, position, dateHired, email, positionDescription, role} = this.refs;
    role = role.value.toLowerCase();
    const user = {
      profile: {
        firstName: firstName.value,
        lastName: lastName.value,
        department: department.value,
        position: position.value,
        permissions: this.state.permissions,
        role: role,
        status: 'invited',
        site: domainHelpers.getSubdomain()
      },
      email: email.value,
    };
    let error = [];
    (firstName.value == '') ? error.push('First Name') : '';
    (lastName.value == '') ? error.push('Last Name') : '';
    (department.value == '') ? error.push('Department') : '';
    (position.value == '') ? error.push('Position') : '';
    (role.value == '') ? error.push('Role') : '';
    (email.value == '') ? error.push('Email') : '';
    const doCreate = ()=> {
      create(user);
      firstName.value = '',
        lastName.value = '',
        department.value = '',
        position.value = '',
        role.value = '',
        status.value = '',
        email.value = '',
        sweetPrompts.sweetSucces('User Succesfully Added', 'click Ok to Continue', 'success');
    };
    (error.length == 0) ? doCreate() : sweetPrompts.sweetSucces(`${error.toString()} Required`, 'click Ok to Continue', 'error');
  }

  _renderError(error) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }

  _changePermissions(e) {
    const permission = e.target.attributes.getNamedItem('data-permission').value;
    (e.target.checked) ? this._addToPermissions(permission) : this._removePermissions(permission);
  }

  _addToPermissions(permission) {
    let permissions = this.state.permissions;
    permissions.push(permission);
    permissions = _.uniq(permissions);
    this.setState({
      permissions: permissions
    });
  }

  _removePermissions(permission) {
    let permissions = this.state.permissions;
    const index = permissions.indexOf(permission);
    permissions.splice(index, 1);
    this.setState({
      permissions: permissions
    });
  }


  change() {
    let {role} = this.refs;
    (role.value == 'Client') ?
      this.setState({details: 'Company'}) : this.setState({details: 'Department'});
  }

  render() {
    const {userPermissions, error, userRole} = this.props;
    const permissionList = [
      {label: 'Client', types: ['readClients', 'createClients', 'updateClients']},
      {label: 'Staff', types: ['readStaffs', 'createStaffs', 'updateStaffs']},
      {label: 'Manager', types: ['readManagers', 'createManagers', 'updateManagers']},
      {label: 'Team', types: ['readTeam', 'createTeam', 'updateTeam']},
      {label: 'Project', types: ['readProject', 'createProject', 'updateProject']},
      {label: 'SubProject', types: ['readSubProject', 'createSubProject', 'updateSubProject']},
      {label: 'Task', types: ['readTask', 'createTask', 'updateTask']},
    ];
    return (
      <section id="team">
        <Tabs/>
        <PageTitle title="Add New User"/>

        <section id="add-new-staff">
          <div className="row no-margin-bottom">
            <form ref="inviteForm">
              <div className="col s12 no-padding">
                {error ? this._renderError(error) : null}


                <div className="col s6">
                  <div className="input-field col s12">
                    <input id="firstName" ref="firstName" type="text" className="validate"/>
                    <label htmlFor="name">First Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="lastName" ref="lastName" type="text" className="validate"/>
                    <label htmlFor="name">Last Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="department" ref="department" type="text" className="validate"/>
                    <label htmlFor="department">{this.state.details}</label>
                  </div>

                  <div className="input-field col s12">
                    <select ref="role">
                      <option key={0} defaultValue="" disabled selected>Choose User Role</option>
                      {
                        (userRole == 'admin' || userRole == 'super-admin') ?
                          <option key={1} defaultValue="admin">Admin</option>
                          : ''
                      }
                      {
                        ((userRole == 'admin' || userRole == 'super-admin')) ?
                          <option key={2} defaultValue="manager"> Manager </option>
                          : ''
                      }
                      <option key={3} defaultValue="staff">Staff</option>
                      <option key={4} defaultValue="client">Client</option>
                    </select>
                    <label>User Role</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="position" ref="position" type="text" className="validate"/>
                    <label htmlFor="position">Position</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="email" ref="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col s6">

                  <div className="col s12">
                    {
                      (this.state.details == 'Department') ?
                        <table>
                          <thead>
                          <tr>
                            <th>Set Permissions</th>
                            <th className="center">View</th>
                            <th className="center">Add</th>
                            <th className="center">Edit</th>
                          </tr>
                          </thead>
                          <tbody>
                          {permissionList.map((permission, index)=>
                            <tr key={index}>
                              <td>{permission.label}</td>
                              {(permission.types) ?
                                permission.types.map((type, typeIndex)=>
                                  <td className="center" key={typeIndex}>
                                    <input type="checkbox" id={type}
                                           data-permission={type} onChange={this._changePermissions.bind(this)}/>
                                    <label htmlFor={type}></label>
                                  </td>
                                )
                                : null
                              }
                            </tr>
                          )}

                          </tbody>
                        </table> : null
                    }
                    <div className="right save">
                      <button type="button" className="btn" onClick={this._create.bind(this)}>
                        Save and Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}
export default AddNewStaff;
