import React from 'react';
import StaffDp from '/client/modules/users/containers/staff_dp';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import TeamCardAction from '/client/modules/team/containers/manage_team/team_card_action';
import DisplayManager from '/client/modules/manager/containers/display_manager';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import {control} from '/lib/access-control/control';

class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {currentUser, teamList, userPermissions} = this.props;
    return (
      <section id="team">
        <PageTitle title={formatHelper.capsAll(domainHelpers.getSubdomain())}/>
        <Tabs/>
        <SubTabs target="/dashboard/team/new" text="Add New Team" permission="createTeam"/>
        <section id="ManageTeam" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <div className="row">
                {(teamList) ?
                  teamList.map((team, index) => (
                    <div key={index} className="collection-item">
                      <a href={`/dashboard/team/${team._id}`}>
                        <article className="col s12 m6 l4">
                          <div className="card">
                            <div className="card-title">{team.name}
                              {
                                (userPermissions) ? control.isPermitted('updateTeam', userPermissions) ?
                                  <a href={`/dashboard/team/edit/${team._id}`}>
                                    <i className="right material-icons">edit</i>
                                  </a>
                                  : '' : ''
                              }
                            </div>
                            <div className="card-content">
                              <DisplayManager userId={team.teamLeader}
                                              target={(userPermissions) ? control.isPermitted('updateManagers', userPermissions) ?`/dashboard/staff/settings/${team._id}/${team.teamLeader}`:'':''}/>
                            </div>
                            <div className="card-action">
                              {(team.members) ?
                                team.members.map((member, key)=>(
                                  (key <= 4) ?
                                    <StaffDp staffType="staff" key={key} teamId={team._id} userId={member}
                                             target={ (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?`/dashboard/staff/settings/${team._id}/${member}`:'':''}/> : ''
                                )) : <div className="row no-margin">
                                <img
                                  src='/uploads/defaults/default_user.png'
                                  alt="Team Lead" className="circle responsive-img dp-small left"/>
                                <div className="col s8 no-margin">
                              <span>Needs a Staff!<br/>
                              Manage now.
                              </span>
                                </div>
                              </div>}
                            </div>
                          </div>
                        </article>
                      </a>
                    </div>
                  )) : ''}
              </div>
            </div>

          </div>
        </section>
      </section>
    );
  }
}

export default TeamList;
