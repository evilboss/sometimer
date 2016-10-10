import React from 'react';
import StaffDp from '/client/modules/users/containers/staff_dp';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import DraftsList from '/client/modules/team/containers/drafts_list';
import TeamCardAction from '/client/modules/team/containers/team_card_action';

class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser, teamListing} = this.props;
    return (
      <section id="team-list">
        <SubTabs target="/team/add" text="Add Team" permission="createTeam"/>
        <div className="border-top row no-margin-bottom relative">
          <div className="col s12 no-padding">
            <div className="row">
              {(teamListing) ?
                teamListing.map((team, index) => (
                  <div key={index} className="collection-item">
                    <article className="col s12 m6 l4">
                      <div className="card">
                        <div className="card-title">{team.name}</div>
                        <div className="card-content">
                          <img
                            src='http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'
                            alt="Team Lead" className="circle responsive-img dp-small left"/>
                          <div className="col s8 staff-details no-margin">
                            <h6>Manager Name<br/>
                              <small>Manager</small>
                            </h6>
                          </div>
                        </div>
                        <div className="card-action">
                          {(team.members) ?
                            team.members.map((member, key)=>(
                              (key <= 4) ? <StaffDp key={key} teamId={team._id} userId={member}/> : ''
                            )) : <div className="row no-margin">
                            <img
                              src='http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'
                              alt="Team Lead" className="circle responsive-img dp-small left"/>
                            <div className="col s8 no-margin">
                              <span>Needs a Staff!<br/>
                              Manage now.
                              </span>
                            </div>
                          </div>}
                        </div>

                        <TeamCardAction teamRoute={`/dashboard/team/${team._id}`}/>
                      </div>
                    </article>
                  </div>
                )) : ''}
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default TeamList;
