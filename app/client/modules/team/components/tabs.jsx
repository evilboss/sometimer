import React from 'react';
import {control} from '/lib/access-control/control';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'
class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userPermissions} = this.props;
    return (
      <div className="tab-nav-wrapper">
        <div className="tab-nav inline">
          <a href="/dashboard/team"
             className={`${FlowHelpers.currentRoute('dashboard.team')} ${FlowHelpers.currentRoute('dashboard.team.new')} ${FlowHelpers.currentRoute('dashboard.myteam')}`}>
            Team</a>
          {
            (userPermissions) ? control.isPermitted('readStaffs', userPermissions) ?
              <a href="/dashboard/team/manage-staff"
                 className={`${FlowHelpers.currentRoute('dashboard.manageStaff')} ${FlowHelpers.currentRoute('dashboard.manageStaff.new')}`}>Staff</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readClients', userPermissions) ?
              <a href="/dashboard/team/manage-clients"
                 className={`${FlowHelpers.currentRoute('dashboard.manageClients')}`}>Client</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readManagers', userPermissions) ?
              <a href="/dashboard/team/manage-managers"
                 className={`${FlowHelpers.currentRoute('dashboard.manageManagers')}`}>Manager</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readAdmin', userPermissions) ?
              <a href="/dashboard/team/manage-admins"
                 className={`${FlowHelpers.currentRoute('dashboard.manageAdmins')}`}>Admin</a>
              : '' : ''
          }
        </div>
      </div>
    );
  }
}
export default Tabs;