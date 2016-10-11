import React from 'react';
import {control} from '/lib/access-control/control';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {userPermissions} = this.props;
    return (
      <div className="col s7 tab-nav">
        <div className="tabs">
          <div className="tab col s3"><a href="/dashboard/team">Manage Team</a></div>
          {
            (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
              <div className="tab col s3"><a href="/dashboard/team/manage-staff">Manage Staff</a></div>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('updateClients', userPermissions) ?
              <div className="tab col s3"><a href="/dashboard/team/manage-clients">Manage Clients</a></div>
              : '' : ''
          }

        </div>
      </div>
    );
  }
}

export default Tabs;
