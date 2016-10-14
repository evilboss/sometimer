import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';

class ManageStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ManageStaff: true
    }
  }

  render() {
    return (
      <section id="team">
        <Tabs/>
        <SubTabs target="/dashboard/team/manage-staff/new" text="Add New Staff" permission="createStaffs"/>
        <section id="manage-staff" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <table className="bordered">
                <thead>
                <tr>
                  <th>Staff</th>
                  <th>Setup Status</th>
                  <th>Team</th>
                  <th>Time log Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <img
                      src='http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'
                      alt="Staff" className="circle responsive-img dp-small left"/>
                    <div className="col staff-details no-margin">
                      <h6>Manager Name<br/>
                        <small>Manager</small>
                      </h6>
                    </div>
                  </td>
                  <td>
                    Setup Incomplete
                  </td>
                  <td>
                    Unassigned
                  </td>
                  <td className="status">
                    <StatusIndicator class="Invite"/>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ section >
    )
      ;
  }
}

export default ManageStaff;
