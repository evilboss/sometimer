import React from 'react';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import Assignproject from '/client/modules/team/containers/manage_managers/assignproject';
import PageTitle from '/client/modules/core/components/page_title';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';

class ManageManagers extends React.Component {
  constructor(props) {
    super(props);

  }

  getAssignedTeam(userId) {
    let {teams, team} = this.props;
    const firstTeam = _.first(_.where(teams, {teamLeader: userId}));
    let teamName = (team) ? (team.name) ? team.name : '' :
      (firstTeam) ? firstTeam.name : '';
    return (teamName) ? teamName : null;
  }

  render() {
    let {allManagers, teamId, teams} = this.props;
    console.log(teamId, 'oo');
    return (
      <section id="team">
        <PageTitle title={formatHelper.capsAll(domainHelpers.getSubdomain())}/>
        <Tabs teamId={teamId}/>
        <SubTabs target={(teamId) ? `/dashboard/team/${teamId}/user/new/manager` : '/dashboard/team/user/new/manager'}
                 text="Add New Manager" permission="createManagers"/>
        <section id="manage-clients" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <table className="bordered staff-list">
                <thead>
                <tr>
                  <th></th>
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
                    <td className="staff-dp">
                      <a
                        href={(teamId) ? `/dashboard/staff/settings/${teamId}/${staff._id}` : `/dashboard/staff/settings/${staff._id}`}>
                        <img
                          src={(staff.profile.displayPhoto) ? `${staff.profile.displayPhoto}` : '/uploads/defaults/default_user.png'}
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
                    <td>
                      {formatHelper.capitalize(staff.profile.status)}
                    </td>
                    <td>
                      {(this.getAssignedTeam(staff._id)) ? this.getAssignedTeam(staff._id) :
                        <Assignproject userId={staff._id} teams={teams}/>}
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
