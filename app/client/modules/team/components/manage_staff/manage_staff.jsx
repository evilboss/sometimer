import React from "react";
import PageTitle from "/client/modules/core/components/page_title";
import Tabs from "/client/modules/team/containers/tabs";
import SubTabs from "/client/modules/team/containers/sub_tabs";
import StatusIndicator from "/client/modules/team/components/status_indicator";
import {domainHelpers} from "/client/utils/helpers/domain-helpers";
import {formatHelper} from "/client/utils/helpers/format-helpers";
class ManageStaff extends React.Component {
  constructor(props) {
    super(props);
  }

  getAssignedTeam(userId) {
    let {teams} = this.props;
    let teamName = '';
    _.each(teams, (team) => {
      (teamName) ? null : teamName = (_.contains(team.members, userId)) ? team.name : '';
    });
    return (teamName) ? teamName : 'Unassigned';
  }

  render() {
    let {allStaff, teamId} = this.props;
    return (
      <section id="team">
        <PageTitle title="   "/>
        <Tabs teamId={teamId}/>
        <SubTabs target="/dashboard/team/user/new/staff" text="Add New Staff" permission="createStaffs"/>
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
                {allStaff.map((staff, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={(staff.profile.displayPhoto) ? `${staff.profile.displayPhoto}` : '/uploads/defaults/default_user.png'}
                        alt="Staff" className="circle responsive-img dp-small left"/>
                      <div className="col staff-details no-margin">
                        <h6>{staff.profile.firstName} {staff.profile.lastName}<br/>
                          <small>{staff.profile.jobTitle}</small>
                        </h6>
                      </div>
                    </td>
                    <td>
                      {formatHelper.capitalize(staff.profile.status)}
                    </td>
                    <td>
                      {this.getAssignedTeam(staff._id)}
                    </td>
                    <td className="status">
                      <StatusIndicator
                        class={(staff.profile.status == 'completed') ? 'Out' : formatHelper.capitalize(staff.profile.status)}/>
                    </td>
                  </tr>
                ))}

                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ section >
    );
  }
}

export default ManageStaff;
