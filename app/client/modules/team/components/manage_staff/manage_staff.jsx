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
        <PageTitle title="All Team"/>
        <div className="row tabs-wrapper">
          <Tabs/>
          <div className="col s12 tabs-content no-padding">
            <section id="manage-staff" className="col s12">
              <SubTabs target="/dashboard/team/manage-staff/new" text="Add New Staff" permission="createStaffs"/>
              <div className="border-top row no-margin-bottom relative">
                <div className="col s12 no-padding">
                  <table className="bordered">
                    <thead>
                    <tr>
                      <th>Staff</th>
                      <th className="right">Status</th>
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
                      <td className="status">
                        <StatusIndicator class="Invite"/>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </
        section >
    )
      ;
  }
}

export default ManageStaff;
