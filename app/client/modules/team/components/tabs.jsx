import React from 'react';
import {control} from '/lib/access-control/control';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {userPermissions} = this.props;
    return (
      <div className="tab-nav-wrapper">
        <div className="tab-nav inline">
          <a href="/dashboard/team">My Team</a>
          {
            (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
              <a href="/dashboard/team/manage-staff">All Staffs</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('updateClients', userPermissions) ?
              <a href="/dashboard/team/manage-clients">Clients</a>
              : '' : ''
          }
        </div>
      </div>
    );
  }
}

export default Tabs;
