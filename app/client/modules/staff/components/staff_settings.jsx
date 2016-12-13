import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import StaffProfileForm from '/client/modules/staff/containers/staff_profile_form';
import PermissionForm from '/client/modules/staff/containers/permission_form';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import Breadcrumbs from '/client/modules/core/containers/breadcrumbs';
import StaffProfile from '/client/modules/staff/containers/staff_profile';
class StaffSettings extends React.Component {
  constructor(props) {
    super(props);
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

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {userPermissions, user, permissions, staffId, teamId, team, projects} = this.props;
    const {role} = (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <section id="team" className="relative">
        <PageTitle title={(user.profile) ? `${user.profile.firstName} ${user.profile.lastName}` : ''}/>
        <Tabs teamId={(teamId) ? teamId : ''}/>
        {(role == 'Manager') ?
          <button className="btn delete waves-effect waves-light theme-color" type="button"
                  onClick={(user) ? this._removeStaff.bind(this, user._id) : ''}>Delete {role}
            <i className="right material-icons close">
              delete_forever</i></button>
          : ''}
        {(teamId) ?
          <div className="col s6">
            <Breadcrumbs crumbs={
              [{text: 'All Teams', path: 'dashboard.team', params: ''}, {
                text: team.name,
                path: 'dashboard.myteam',
                params: team._id
              },
                {text: 'Staff Settings', path: 'staff.team.settings', params: ''}]}/>
            <small>{(team) ? (team.description) ? team.description : '' : ''}</small>
          </div>
          : ''}
        <section id="staff-settings">
          <div className="row">
            <div className="col s2 tabs-vertical">
              <ul className="tabs">
                <li className="tab col s3"><a className="active" href="#staffProfile">Profile</a></li>
                <li className="tab col s3"><a href="#StaffProfileForm">Basic info</a></li>
                {
                  (role == 'client') ? null :
                    <li className="tab col s3"><a href="#permissions">Permissions</a></li>
                }
              </ul>
            </div>

            <div id="staffProfile" className="col s10 no-padding">
              <StaffProfile user={user} projects={projects}/>
            </div>
            <div id="StaffProfileForm" className="col s10 no-padding">
              <StaffProfileForm user={user} staffId={staffId}/>
            </div>
            {
              (role == 'client') ? null :
                <div id="permissions" className="col s10 no-padding">
                  <PermissionForm userPermissions={userPermissions} user={user} permissions={permissions}/>
                </div>}
          </div>
        </section>

      </section>
    );
  }


}

export default StaffSettings;
