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
import PermissionCheckbox from '/client/modules/team/components/permission_checkbox';
import StepGuide from '/client/utils/buttons/step_guide';
import TimezonePicker from 'react-timezone';
class AddNewStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: [],
      timezone: 'Asia/Manila',
      isCheckall: false,
      checkall: false
    }
  }

  checkAll() {
    const {userType} = this.props;
    const currentPermissions = this.getUserPemissions();
    this.setState({
      permissions: (!this.state.isCheckall) ? currentPermissions : []
    });
    this.setState({
      isCheckall: !this.state.isCheckall
    });
  }

  getUserPemissions() {
    const {userType} = this.props;
    const currentPermissions = [];
    this.permissionList().map((permission, index) =>
      (_.contains(permission.userTypes, userType)) ? currentPermissions.push.apply(currentPermissions, permission.types) : '');
    return _.uniq(currentPermissions);
  }

  componentDidMount() {
  }

  _create() {
    let timezone = this.state.timezone;
    let {create, userType, teams, team, teamId} = this.props;
    let {firstName, lastName, department, company, position, dateHired, email, positionDescription, role, message} = this.refs;
    const user = {
      profile: {
        firstName: firstName.value,
        lastName: lastName.value,
        department: (teamId) ? teamId : (department) ? department.getValue() : '',
        company: (company) ? company.value : '',
        position: position.value,
        timezone: timezone,
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
    const doCreate = () => {
      create(user, message.value);
      firstName.value = '';
      lastName.value = '';
      position.value = '';
      status.value = '';
      email.value = '';
      let target = (user.profile.role == 'staff') ? '' : `manage-${user.profile.role}s`;
      sweetPrompts.sweetIfElseSucces('', 'Invite Sent!', 'success', {
          path: (teamId) ? `/dashboard/team/${teamId}/user/new/${target}` : `/dashboard/team/user/new/${target}`,
          text: `Add another ${userType}`
        },
        {
          path: (teamId) ? `/dashboard/team/${teamId}`
            : `/dashboard/team/${target}`, text: (teamId) ? `View ${team.name}` : `View all ${userType}s`
        })
    };
    (error.length == 0) ? doCreate() : sweetPrompts.sweetSucces(`You forgot to fill in some required fields <br/><div class="red-text">${error.toString()}</div>`, 'Sorry', 'error');
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
    console.log((this.getUserPemissions().length == this.state.permissions.length));
    this.setState({
      isCheckall: (this.getUserPemissions().length == this.state.permissions.length)
    });
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

  hasPermission(type) {
    return (_.contains(this.state.permissions, type)) ? true : false;
  }

  permissionList() {
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
    return permissionList
  }

  changeTimezone(timezone) {
    console.log('New Timezone', timezone);
    this.setState({timezone: timezone});
  }

  render() {
    const {allStaff, teamAllStaff, userPermissions, error, userRole, userType, teams, team, teamId} = this.props;
    let target = (userType == 'staff') ? userType : `${userType}s`;
    let value = this.state.timezone;
    const {isCheckall, checkall}=this.state;
    console.log(team, 'team');
    return (
      <section id="team">
        <PageTitle title={`Add New ${formatHelper.capitalize(userType)}`}/>
        <Tabs userType={userType} teamId={teamId}/>

        <div className="twbs tab-page-header">
          <Breadcrumbs crumbs={
            [
              (teamId) ?
                {
                  text: 'All Teams',
                  path: '/dashboard/team/',
                  params: ''
                } : {},
              {
                text: (teamId) ? `${team.name}` : `All ${formatHelper.capitalize(userType)}`,
                path: (teamId) ? `/dashboard/team/${teamId}` : `dashboard.manage${formatHelper.capitalize(target)}`,
                params: ''
              }, {
              text: `Add ${formatHelper.capitalize(userType)}`,
              path: (teamId) ? `/dashboard/team/${teamId}/user/new/` : 'dashboard.user.new',
              params: userType
            }]}/>
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
                      <label htmlFor="contactNumber" className="active">Landline / Mobile Number</label>
                    </div>
                  </div>
                  <div className=" col s6">
                    <div className="input-field">
                      <input placeholder="Skype ID" id="skypeID" ref="skypeID" type="text" className="validate"/>
                      <label htmlFor="skypeID" className="active">Skype ID</label>
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
                        <div>

                          <div className="input-field team-guide">
                            <ReactMaterialSelect label="Department" id="department"
                                                 resetLabel="Clear Selected Option"
                                                 ref="department">
                              {teams.map((team, index) => (
                                <option key={index} dataValue={team._id}>
                                  {team.name}
                                </option>
                              ))}
                            </ReactMaterialSelect>
                            <label htmlFor="department" className="active">Department/Team (or assign later)</label>
                            <StepGuide userType="team" pageTitle={userType}/>
                          </div>

                        </div>
                      }
                    </div>
                  }
                  <div className="col s12 no-padding">
                    <div className="input-field col s6 no-padding">
                      <TimezonePicker
                        value={value}
                        onChange={this.changeTimezone.bind(this)}
                        inputProps={{
                          placeholder: 'Select Timezone...',
                          name: 'timezone',
                        }}
                      />
                      <label htmlFor="timezone" className="active">Timezone</label>
                    </div>
                  </div>
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
                          {this.permissionList().map((permission, index) =>
                            (_.contains(permission.userTypes, userType)) ?
                              <tr key={index}>
                                <td>{permission.label}</td>
                                {(permission.types) ?
                                  permission.types.map((type, typeIndex) =>
                                    <td className="center" key={typeIndex}>
                                      <input type="checkbox" id={type}
                                             value={this.hasPermission(type)}
                                             checked={this.hasPermission(type)}
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
                        {(isCheckall) ?
                          <button type="button" className="pull-right btn cancel" onClick={this.checkAll.bind(this)}>
                            Uncheck
                            all
                          </button>
                          :
                          <button type="button" className="pull-right btn theme-color"
                                  onClick={this.checkAll.bind(this)}>Check
                            all
                          </button>
                        }
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
                              className="materialize-textarea">
                    </textarea>
                      <label htmlFor="message" className="active">Add a personal message when the person receives the
                        invite(optional)
                      </label>
                    </div>
                  </div>
                  <div className="right save">
                    <CancelBtn route={FlowHelpers.pathFor(`dashboard.manage${formatHelper.capitalize(target)}`, '')}/>
                    <button type="button" className="btn" onClick={this._create.bind(this)}>
                      Add and Invite {userType}
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
