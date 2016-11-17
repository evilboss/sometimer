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
    let {create, userType, teams, teamId} = this.props;
    let {firstName, lastName, department, position, dateHired, email, positionDescription, role, message} = this.refs;
    const user = {
      profile: {
        firstName: firstName.value,
        lastName: lastName.value,
        department: (teamId) ? teamId : (this.refs.department) ? this.refs.department.getValue() : '',
        company: (this.refs.company) ? this.refs.company.getValue() : '',
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
      create(user, message.value);
      firstName.value = '';
      lastName.value = '';
      position.value = '';
      status.value = '';
      email.value = '';
      let target = (user.profile.role == 'staff') ? '' : `manage-${user.profile.role}s`;
      sweetPrompts.sweetSucces('User Succesfully Added', 'click Ok to Continue', 'success', (teamId) ? `/dashboard/team/${teamId}/${target}` : `/dashboard/team/${target}`);
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
    const {userPermissions, error, userRole, userType, teams, teamId} = this.props;
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
        <PageTitle title={`Add New ${formatHelper.capitalize(userType)}`}/>
        <Tabs userType={userType} teamId={teamId}/>
        <Breadcrumbs crumbs={
        [{text: (teamId)?'team':`${formatHelper.capitalize(userType)}`, path: (teamId)?`/dashboard/team/${teamId}`:`dashboard.manage${formatHelper.capitalize(target)}`, params: ''}, {text: `Add ${formatHelper.capitalize(userType)}`, path: (teamId)?`/dashboard/team/${teamId}/user/new/`:'dashboard.user.new', params: userType}]}/>
        <section id="add-new-staff">
          <div className="row no-margin-bottom">
            <form ref="inviteForm" className="twbs">
              <div className="col s12 no-padding">
                {error ? this._renderError(error) : null}

                <div className="col s4">
                  <div className="input-field col s12">
                    <input placeholder="First Name" id="firstName" ref="firstName" type="text" className="validate"/>
                    <label htmlFor="firstName" className="active">First Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input placeholder="Last Name" id="lastName" ref="lastName" type="text" className="validate"/>
                    <label htmlFor="lastName" className="active">Last Name</label>
                  </div>
                  {(teamId) ? null :
                    <div className="input-field col s12">
                      {(userType == 'client') ? <ReactMaterialSelect label="Company" ref="company">
                      </ReactMaterialSelect> : <ReactMaterialSelect label="Department" ref="department">
                        {teams.map((team, index) => (
                          <option key={index} dataValue={team._id}>
                            {team.name}
                          </option>
                        ))}
                      </ReactMaterialSelect>}
                    </div>
                  }
                  <div className="input-field col s12">
                    <input id="position" placeholder="Position" ref="position" type="text" className="validate"/>
                    <label htmlFor="position" className="active">Position</label>
                  </div>
                  <div className="input-field col s12">
                    <input placeholder="Email" id="email" ref="email" type="email" className="validate"/>
                    <label htmlFor="email" className="active">Email</label>
                  </div>
                </div>

                <div className="col s4">
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
                  </div>
                </div>
                <div className="col s4">
                  <div className="input-field col s12">
                    <textarea placeholder="Add a personal message" id="message" ref="message"
                              className="materialize-textarea"></textarea>
                  </div>
                  <div className="right save">
                    <a href={FlowHelpers.pathFor(`dashboard.manage${formatHelper.capitalize(target)}`,'')} type="button"
                       className="btn cancel">
                      Cancel
                    </a>
                    <button type="button" className="btn" onClick={this._create.bind(this)}>
                      Save and Invite
                    </button>
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
