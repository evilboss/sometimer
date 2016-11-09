import React from 'react';
import {control} from '/lib/access-control/control';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'
class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userPermissions, userType} = this.props;
    return (
      <div className="tab-nav-wrapper">
        <div className="tab-nav inline">
          <a href="/dashboard/team"
             className={`${FlowHelpers.currentRoutes(['dashboard.team','dashboard.team.new','dashboard.myteam'])}`}>
            Team</a>
          {
            (userPermissions) ? control.isPermitted('readStaffs', userPermissions) ?
              <a href="/dashboard/team/manage-staff"
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageStaff',(userType=='staff')?'dashboard.user.new':''])}`}>Staff</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readClients', userPermissions) ?
              <a href="/dashboard/team/manage-clients"
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageClients',(userType=='client')?'dashboard.user.new':''])}`}>Client</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readManagers', userPermissions) ?
              <a href="/dashboard/team/manage-managers"
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageManagers',(userType=='manager')?'dashboard.user.new':''])}`}>Manager</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readAdmin', userPermissions) ?
              <a href="/dashboard/team/manage-admins"
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageAdmins',(userType=='admin')?'dashboard.user.new':''])}`}>Admin</a>
              : '' : ''
          }
        </div>
      </div>
    );
  }
}
export default Tabs;