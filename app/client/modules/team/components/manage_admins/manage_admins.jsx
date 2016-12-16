import React from 'react';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import PageTitle from '/client/modules/core/components/page_title';

import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';

class ManageAdmins extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let {allAdmins} = this.props;
    return (
      <section id="team">
        <PageTitle title={formatHelper.capsAll(domainHelpers.getSubdomain())}/>
        <Tabs/>
        <SubTabs target="/dashboard/team/user/new/admin" text="Add New Admin" permission="createClients"/>
        <section id="manage-clients" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <table className="bordered staff-list">
                <thead>
                <tr>
                  <th></th>
                  <th>Admins</th>

                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {allAdmins.map((staff, index) => (
                  <tr key={index}>
                    <td className="staff-dp">
                      <a
                        href={`/dashboard/staff/settings/${staff._id}`}>
                        <img
                          src={(staff.profile.displayPhoto)?`${staff.profile.displayPhoto}`:'/uploads/defaults/default_user.png'}
                          alt="Staff" className="circle responsive-img dp-small left"/>
                      </a>
                    </td>
                    <td className="staff-details">
                      <div className="col staff-details no-margin">
                        <h6>{staff.profile.firstName} {staff.profile.lastName}<br/>
                          <small>{staff.profile.jobTitle}</small>
                        </h6>
                      </div>
                    </td>
                    <td className="status">
                      <StatusIndicator class={formatHelper.capitalize(staff.profile.status)}/>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default ManageAdmins;
