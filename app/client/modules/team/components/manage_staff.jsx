import React from 'react';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';


class ManageStaff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SubTabs/>
        <div className="border-top row no-margin-bottom relative">
          <div className="col s12 no-padding">
            <table className="bordered">
              <thead>
              <th>Staff</th>
              <th className="right">Status</th>
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
      </div>
    );
  }
}

export default ManageStaff;
