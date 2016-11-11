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
import {FlowHelpers} from '/client/utils/helpers/route-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import Breadcrumbs from '/client/modules/core/containers/breadcrumbs';
import ReactMaterialSelect from 'react-material-select';

class AddNewStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: []
    }
  }

  componentDidMount() {
  }

  _create() {
    let {create, userType, teams} = this.props;
    let {firstName, lastName, department, position, dateHired, email, positionDescription, role} = this.refs;
    const user = {
      profile: {
        firstName: firstName.value,
        lastName: lastName.value,
        department: department.value,
        position: position.value,
        permissions: this.state.permissions,
        role: userType,
        status: 'invited',
        site: domainHelpers.getSubdomain()
      },
      email: email.value,
    };
    let error = [];
    (firstName.value == '') ? error.push('First Name') : '';
    (lastName.value == '') ? error.push('Last Name') : '';
    (position.value == '') ? error.push('Position') : '';
    (email.value == '') ? error.push('Email') : '';
    const doCreate = ()=> {
      create(user);
      firstName.value = '';
      lastName.value = '';
      department.value = '';
      position.value = '';
      status.value = '';
      email.value = '';
      let target = (user.profile.role == 'staff') ? user.profile.role : `${user.profile.role}s`;
      sweetPrompts.sweetSucces('User Succesfully Added', 'click Ok to Continue', 'success', `/dashboard/team/manage-${target}`);
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

  _addTeam() {
    const {add}= this.props;
    add('text');
    console.log('Adding team');
  }

  render() {
    const {userPermissions, error, userRole, userType, teams} = this.props;
    const permissionList = [
      {
        label: 'Client',
        types: ['readClients', 'createClients', 'updateClients'],
        userTypes: ['super-admin', 'admin', 'manager']
      },
      {
        label: 'Staff',
        types: ['readStaffs', 'createStaffs', 'updateStaffs'],
        userTypes: ['super-admin', 'admin', 'manager']
      },
      {
        label: 'Manager',
        types: ['readManagers', 'createManagers', 'updateManagers'],
        userTypes: ['super-admin', 'admin', 'manager']
      },
      {label: 'Team', types: ['readTeam', 'createTeam', 'updateTeam'], userTypes: ['super-admin', 'admin', 'manager']},
      {
        label: 'Project',
        types: ['readProject', 'createProject', 'updateProject'],
        userTypes: ['super-admin', 'admin', 'manager', 'staff']
      },
      {
        label: 'Workflow',
        types: ['readWorkflow', 'createWorkflow', 'updateWorkflow'],
        userTypes: ['super-admin', 'admin', 'manager', 'staff']
      },
      {
        label: 'Admin',
        types: ['readAdmin', 'createAdmin', 'updateAdmin'],
        userTypes: ['super-admin', 'admin']
      }
    ];
    let target = (userType == 'staff') ? userType : `${userType}s`;

    return (
      <section id="team">
        <Tabs userType={userType}/>
        <PageTitle title={`Add New ${formatHelper.capitalize(userType)}`}/>
        <Breadcrumbs crumbs={
        [{text: `${formatHelper.capitalize(userType)}`, path: `dashboard.manage${formatHelper.capitalize(target)}`, params: ''}, {text: `Add ${formatHelper.capitalize(userType)}`, path: 'dashboard.user.new', params: userType}]}/>
        <section id="add-new-staff">
          <div className="row no-margin-bottom">
            <form ref="inviteForm">
              <div className="col s12 no-padding">
                {error ? this._renderError(error) : null}
                <div className="col s6">
                  <div className="input-field col s12">
                    <input id="firstName" ref="firstName" type="text" className="validate"/>
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="lastName" ref="lastName" type="text" className="validate"/>
                    <label htmlFor="lastName">Last Name</label>
                  </div>

                  <div className="input-field col s12">
                    {(userType == 'client') ? <ReactMaterialSelect label="Company" ref="company">
                      {teams.map((team, index) => (
                        <option key={index} dataValue={team._id}>
                          {team.name}
                        </option>
                      ))}
                    </ReactMaterialSelect> : <ReactMaterialSelect label="Department" ref="department">
                      {teams.map((team, index) => (
                        <option key={index} dataValue={team._id}>
                          {team.name}
                        </option>
                      ))}
                    </ReactMaterialSelect>}

                  </div>


                  <button type="button" onClick={this._addTeam.bind(this)}>Add Team</button>
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
                      (_.contains(['staff', 'admin', 'manager'], userType)) ?
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
                            (_.contains(permission.userTypes, userType)) ?
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
                              </tr> : null
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
AddNewStaff.defaultProps = {};
export default AddNewStaff;
