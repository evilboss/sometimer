import React from "react";
import Tabs from "/client/modules/team/containers/tabs";
import StaffTeams from "/client/modules/staff/containers/staff_teams";
import PermissionForm from "/client/modules/staff/containers/permission_form";
import {formatHelper} from "/client/utils/helpers/format-helpers";
import Breadcrumbs from "/client/modules/core/containers/breadcrumbs";
import StaffProfile from "/client/modules/staff/containers/staff_profile";
import {sweetPrompts} from "/client/utils/helpers/sweet-helper";
import StatusIndicator from "/client/modules/team/components/status_indicator";
import {control} from "/lib/access-control/control";

class StaffSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPermission: false,
      editProfile: false,
    }
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  componentWillUpdate() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  _removeStaff(userId) {
    let {removeStaff} = this.props;
    sweetAlert({
      title: "Confirm Delete?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0a84ad",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      closeOnConfirm: false,
      closeOnCancel: true,
      allowEscapeKey: true,
      allowOutsideClick: true
    }, function (isConfirm) {
      if (isConfirm) {
        removeStaff(userId);

      }
    });
  }

  togglePermission() {
    this.setState({
      showPermission: !this.state.showPermission
    });
  }

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {currentUser, userPermissions, user, permissions, staffId, teamId, team, projects, teams} = this.props;

    const {role} = (user) ? (user.profile) ? user.profile : '' : '';
    const {profile} = (user) ? user : '';
    let showPermission = this.state.showPermission;
    return (
      <section id="team" className="relative">
        <Tabs teamId={(teamId) ? teamId : ''}/>
        {(teamId) ?
          <div className="col s6">
            <Breadcrumbs crumbs={
              [{text: 'All Teams', path: 'dashboard.team', params: ''},
                {
                  text: (team) ? team.name : '',
                  path: 'dashboard.myteam',
                  params: (team) ? team._id : ''
                },
                {
                  text: (user) ? (user.profile) ? `${user.profile.firstName} ${user.profile.lastName}` : '' : null,
                  path: 'staff.team.settings',
                  params: ''
                }]}/>
            <small>{(team) ? (team.description) ? team.description : '' : ''}</small>
          </div>
          : <div className="col s6">
          <Breadcrumbs crumbs={
            [
              {
                text: `All ${((user) ? (user.profile) ? `${user.profile.role}s` : '' : '')}`,
                path: (user) ? (user.profile) ? `dashboard.manage${formatHelper.capitalize(user.profile.role)}s` : '' : '',
                params: ''
              },
              {
                text: (user) ? (user.profile) ? `${user.profile.firstName} ${user.profile.lastName}` : '' : '',
                path: 'staff.team.settings',
                params: ''
              }
            ]
          }/>

        </div>}
        <div className="col s12 border-bottom">
          <h5 className="viewed-profile">
            Viewing {(user) ? (user.profile) ? `${user.profile.firstName} ${user.profile.lastName}` : '' : ''}</h5>
        </div>
        <section id="staff-settings">
          <div className="row">

            <div className="col s2 tabs-vertical">
              <ul className="tabs">
                <li className="tab col s3"><a className="active" href="#staffProfile">Profile</a></li>
                <li className="tab col s3"><a href="#StaffTeams">Teams</a></li>
                <li className="tab col s3">
                  <a onClick={ sweetPrompts.sweetOkPrompt.bind(this, 'Coming Soon!')}>Projects</a>
                </li>
                <li className="tab col s3">
                  <a onClick={ sweetPrompts.sweetOkPrompt.bind(this, 'Coming Soon!')}>Workflow</a>
                </li>
              </ul>
            </div>
            <div className="col s10 no-padding">
              {
                (role == 'client') ? null :
                  <div id="permissions" className={`no-padding z-depth-2 ${showPermission}`}>
                    <a onClick={this.togglePermission.bind(this)}>
                      <i className="material-icons right">close</i>
                    </a>
                    <PermissionForm userPermissions={userPermissions} user={user} permissions={permissions}/>
                    <div className="col s12 no-padding">
                      {(currentUser) ?
                        (!control.isStaff(currentUser)) ?
                          (user) ?
                            (user._id == currentUser) ? null :
                              <button className="pull-right btn delete waves-effect waves-light theme-color"
                                      type="button"
                                      onClick={(user) ? this._removeStaff.bind(this, user._id) : ''}>Delete {role}
                                <i className="right material-icons close">
                                  delete_forever</i>
                              </button>
                            : ''
                          : ''
                        : ''}
                    </div>
                  </div>}

              <div id="staffProfile" className="col s7">
                <div className="col s12 staff-profile-details">
                  <img src={(profile) ?
                    (profile.displayPhoto)
                      ? profile.displayPhoto
                      : '/uploads/defaults/default_user.png'
                    : '/uploads/defaults/default_user.png'}
                       className="circle responsive-img dp-large"/>
                  <div className="inline profile-header">
                    <table className="responsive-table">
                      <tr>
                        <td>
                          <div className="status">
                            <h5 className="no-margin">{
                              (profile) ?
                                `${profile.firstName} ${profile.lastName}`
                                : ''}</h5>
                            <StatusIndicator class={(profile) ?
                              (profile.status) ? formatHelper.capitalize(profile.status)
                                : '' : ''}/>
                          </div>
                        </td>
                        <td className="center-align">
                          <div className="icons center-align">

                            <a href={(team) ? `/dashboard/staff/${team._id}/${user._id}` : ''}>
                              <img src="/Assets/icons/time.png"/>
                            </a>
                            {
                              (role == 'client') ? null :
                                <a onClick={this.togglePermission.bind(this)}>
                                  <i className="material-icons">lock</i>
                                </a>
                            }
                            <a onClick={this.togglePermission.bind(this)}>
                              <i className="material-icons">edit</i>
                            </a>

                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <StaffProfile user={user} teams={(teams) ? teams : ''} projects={projects}/>
              </div>
              <div id="StaffTeams" className="col s7">
                <StaffTeams user={user} teams={(teams) ? teams : ''} currentUser={currentUser}
                            permissions={userPermissions}
                            staffId={staffId}/>
              </div>
            </div>
          </div>
        </section>

      </section>
    )
      ;
  }


}

export
default
StaffSettings;
