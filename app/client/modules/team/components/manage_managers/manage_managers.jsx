import React from 'react';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import PageTitle from '/client/modules/core/components/page_title';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';

class ManageManagers extends React.Component {
  constructor(props) {
    super(props);
  }

  getAssignedTeam(userId) {
    let {teams, team} = this.props;
    let teamName = (team) ? (team.name) ? team.name : '' : '';
    _.each(teams, (team)=> {
      (teamName) ? null : teamName = (_.contains(team.teamLeader, userId)) ? team.name : '';
    });
    return (teamName) ? teamName : 'Unassigned';
  }

  render() {
    let {allManagers, teamId} = this.props;
    return (
      <section id="team">
        <PageTitle title={formatHelper.capsAll(domainHelpers.getSubdomain())}/>
        <Tabs teamId={teamId}/>
        <SubTabs target={(teamId)?`/dashboard/team/${teamId}/user/new/manager`:'/dashboard/team/user/new/manager'}
                 text="Add New Manager" permission="createManagers"/>
        <section id="manage-clients" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <table className="bordered">
                <thead>
                <tr>
                  <th>Managers</th>

                  <th>Invite Status</th>

                  <th>Team</th>

                  <th> Timelog Status
                  </th>
                </tr>
                </thead>
                <tbody>
                {allManagers.map((staff, index) => (
                  <tr key={index}>
                    <td>
                      <a
                        href={(teamId)?`/dashboard/staff/settings/${teamId}/${staff._id}`:`/dashboard/staff/settings/${staff._id}`}>
                        <img
                          src={(staff.profile.displayPhoto)?`${staff.profile.displayPhoto}`:'/uploads/defaults/default_user.png'}
                          alt="Staff" className="circle responsive-img dp-small left"/>
                      </a>
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

export default ManageManagers;
