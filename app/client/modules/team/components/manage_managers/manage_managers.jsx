import React from 'react';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import {formatHelper} from '/client/utils/helpers/format-helpers';
class ManageManagers extends React.Component {
  constructor(props) {
    super(props);
  }

  getAssignedTeam(userId) {
    let {teams} = this.props;
    let teamName = '';
    _.each(teams, (team)=> {
      (teamName) ? null : teamName = (_.contains(team.members, userId)) ? team.name : '';
    });
    return (teamName) ? teamName : 'Unassigned';
  }

  render() {
    let {allManagers} = this.props;
    return (
      <section id="team">
        <Tabs/>
        <SubTabs target="/dashboard/team/user/new?user=manager" text="Add New Manager" permission="createClients"/>
        <section id="manage-clients" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <table className="bordered">
                <thead>
                <tr>
                  <th>Managers</th>
                </tr>
                </thead>
                <tbody>
                {allManagers.map((staff, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={(staff.profile.displayPhoto)?`${staff.profile.displayPhoto}`:'/uploads/defaults/default_user.png'}
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
