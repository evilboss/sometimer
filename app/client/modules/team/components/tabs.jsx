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
             className={`${FlowHelpers.currentRoute('dashboard.team')} ${FlowHelpers.currentRoute('dashboard.team.new')} ${FlowHelpers.currentRoute('dashboard.myteam')}`}>My
            Team</a>
          {
            (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
              <a href="/dashboard/team/manage-staff"
                 className={`${FlowHelpers.currentRoute('dashboard.manageStaff')} ${FlowHelpers.currentRoute('dashboard.manageStaff.new')}`}>All
                Staffs</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('updateClients', userPermissions) ?
              <a href="/dashboard/team/manage-clients"
                 className={`${FlowHelpers.currentRoute('dashboard.manageClients')}`}>Clients</a>
              : '' : ''
          }
        </div>
      </div>
    );
  }
}

export default Tabs;
