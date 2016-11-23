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
import CancelBtn from '/client/utils/buttons/cancel_btn';
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
    let {firstName, lastName, department, company, position, dateHired, email, positionDescription, role, message} = this.refs;
    const user = {
      profile: {
        firstName: firstName.value,
        lastName: lastName.value,
        department: (teamId) ? teamId : (department) ? department.getValue() : '',
        company: (company) ? company.value : '',
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
  };

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
    const {allStaff, teamAllStaff, userPermissions, error, userRole, userType, teams, teamId} = this.props;
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
        userTypes: ['super-admin', 'admin']
      },
      {label: 'Team', types: ['readTeam', 'createTeam', 'updateTeam'], userTypes: ['super-admin', 'admin']},
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
        userTypes: ['super-admin']
      }
    ];
    let target = (userType == 'staff') ? userType : `${userType}s`;
    return (
      <section id="team">
        <PageTitle title={`Add New ${formatHelper.capitalize(userType)}`}/>
        <Tabs userType={userType} teamId={teamId}/>

        <div className="twbs tab-page-header">
          <Breadcrumbs crumbs={
            [{
              text: (teamId) ? 'team' : `${formatHelper.capitalize(userType)}`,
              path: (teamId) ? `/dashboard/team/${teamId}` : `dashboard.manage${formatHelper.capitalize(target)}`,
              params: ''
            }, {
              text: `Add ${formatHelper.capitalize(userType)}`,
              path: (teamId) ? `/dashboard/team/${teamId}/user/new/` : 'dashboard.user.new',
              params: userType
            }]}/>
          <h5 className="inline">Add Staff to Team Name</h5>

        </div>
        <section id="add-new-staff">
          <div className="row no-margin-bottom">
            <form ref="inviteForm" className="twbs">
              <p>Please fill in the fields below to add a new staff and invite him / her into the system,</p>
              <div className="col s12 no-padding">
                {error ? this._renderError(error) : null}

                <div className="col s8 no-padding">
                  <div className="class-info">
                    PERSONAL INFORMATION
                  </div>
                  <div className="col s6 no-padding">
                    <div className="input-field">
                      <input placeholder="First Name" id="firstName" ref="firstName" type="text" className="validate"/>
                      <label htmlFor="firstName" className="active required">First Name</label>
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="input-field">
                      <input placeholder="Last Name" id="lastName" ref="lastName" type="text" className="validate"/>
                      <label htmlFor="lastName" className="active required">Last Name</label>
                    </div>
                  </div>
                  <div className="class-info">
                    CONTACT INFORMATION
                  </div>
                  <div className=" col s6 no-padding">
                    <div className="input-field">
                      <input placeholder="Email" id="email" ref="email" type="email" className="validate"/>
                      <label htmlFor="email" className="active required">Email</label>
                    </div>
                  </div>
                  <div className=" col s6">
                    <div className="input-field">
                      <input placeholder="Country" id="country" ref="country" type="text" className="validate"/>
                      <label htmlFor="country" className="active required">Country(working from what part of the
                        world?)</label>
                    </div>
                  </div>
                  <div className=" col s6 no-padding">
                    <div className="input-field">
                      <input placeholder="Contact Number" id="contactNumber" ref="contactNumber" type="text"
                             className="validate"/>
                      <label htmlFor="contactNumber" className="active required">Landline / Mobile Number</label>
                    </div>
                  </div>
                  <div className=" col s6">
                    <div className="input-field">
                      <input placeholder="Skype ID" id="skypeID" ref="skypeID" type="text" className="validate"/>
                      <label htmlFor="skypeID" className="active required">Skype ID</label>
                    </div>
                  </div>
                  <div className="class-info">
                    WORK INFO
                  </div>
                  <div className=" col s6 no-padding">
                    <div className="input-field">
                      <input id="position" placeholder="Position" ref="position" type="text" className="validate"/>
                      <label htmlFor="position" className="active required">Position</label>
                    </div>
                  </div>
                  {(teamId) ? null :
                    <div className="col s6">

                      {(userType == 'client') ?
                        <div className="input-field">
                          <input placeholder="Company" id="lastName" ref="company" type="text"
                                 className="validate"/>
                          <label htmlFor="company" className="active required">Company</label>
                        </div>
                        :
                        <div className="input-field">
                          <ReactMaterialSelect label="Department" id="department" ref="department">
                            {teams.map((team, index) => (
                              <option key={index} dataValue={team._id}>
                                {team.name}
                              </option>
                            ))}
                          </ReactMaterialSelect>
                          <label htmlFor="department" className="active required">Department</label>
                        </div>}
                    </div>
                  }
                </div>

                <div className="col s8 no-padding">
                  {
                    (_.contains(['staff', 'admin', 'manager'], userType)) ?
                      <div className="col s12 no-padding">
                        <div className="class-info">
                          SET SYSTEM PERMISSIONS
                        </div>
                        <table>
                          <thead>
                          <tr>
                            <th>Permissions for</th>
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
                        </table>
                      </div> : null
                  }
                </div>
                <div className="col s8 no-padding">
                  <div className="class-info">
                    INVITATION SETTINGS
                  </div>
                  <div className=" col s12 no-padding">
                    <div className="input-field">
                    <textarea placeholder="Add a personal message" id="message" ref="message"
                              className="materialize-textarea"></textarea>
                      <label htmlFor="message" className="active">Add a personal message when the person receives the
                        invite(optional)</label>
                    </div>
                  </div>
                  <div className="right save">
                    <CancelBtn route={FlowHelpers.pathFor(`dashboard.manage${formatHelper.capitalize(target)}`, '')}/>
                    <button type="button" className="btn" onClick={this._create.bind(this)}>
                      Add and Invite Staff
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </
        section >
    )
      ;
  }
}
AddNewStaff.defaultProps = {};
export default AddNewStaff;
