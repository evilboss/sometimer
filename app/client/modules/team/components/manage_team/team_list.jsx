import React from 'react';
import StaffDp from '/client/modules/users/containers/staff_dp';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import TeamCardAction from '/client/modules/team/containers/manage_team/team_card_action';
import DisplayManager from '/client/modules/manager/containers/display_manager';
class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser, teamList} = this.props;
    return (
      <section id="team">
        <Tabs/>
        <SubTabs target="/dashboard/team/new" text="Add New Team" permission="createTeam"/>
        <section id="ManageTeam" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <div className="row">
                {(teamList) ?
                  teamList.map((team, index) => (
                    <div key={index} className="collection-item">
                      <article className="col s12 m6 l4">
                        <div className="card">
                          <div className="card-title">{team.name}</div>
                          <div className="card-content">

                            <DisplayManager userId={team.teamLeader}/>
                          </div>
                          <div className="card-action">
                            {(team.members) ?
                              team.members.map((member, key)=>(
                                (key <= 4) ? <StaffDp key={key} teamId={team._id} userId={member}/> : ''
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

                          <TeamCardAction editTeam={`/dashboard/team/edit/${team._id}`}
                                          teamRoute={`/dashboard/team/${team._id}`}/>
                        </div>
                      </article>
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
