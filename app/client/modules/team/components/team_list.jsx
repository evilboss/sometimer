import React from 'react';
import StaffDp from '/client/modules/users/containers/staff_dp';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import DraftsList from '/client/modules/team/containers/drafts_list';

class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const teamListing = this.props.team;
    return (
      <section id="team-list">
        <SubTabs/>


        <div className="border-top row no-margin-bottom relative">
          <div className="col s9 no-padding">
            <div className="row">
              {(teamListing) ?
                teamListing.map((team, index) => (
                  <a href={`/dashboard/team/${team._id}`} key={index} className="collection-item">
                    <article className="col s12 m6 l4">
                      <div className="card">

                        <div className="card-title">{team.name}</div>

                        <div className="card-content">
                          <img
                            src='http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'
                            alt="Team Lead" className="circle responsive-img dp-small left"/>
                          <div className="col s8 no-margin">
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
                      </div>
                    </article>
                  </a>
                )) : ''}
            </div>
          </div>


          <div className="col s3 no-padding vertical-line">
            <DraftsList/>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamList;
