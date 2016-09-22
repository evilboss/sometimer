import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import StaffDp from '/client/modules/users/containers/staff_dp';

class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="team-list">
        <PageTitle title="All Team"/>
        <div className="row">

          <div className="col s2 center-align">
            <div className="btn-add">
              <a href="/dashboard/team/new" className="waves-effect waves-light secondary-color">
                <i className="material-icons">add</i></a>
              <h6>New Team</h6>
            </div>
          </div>
          <div className="col s10">
            {this.props.team.map((team, index) => (
              <a href={`/dashboard/team/${team._id}`} key={index} className="collection-item">
                <article className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-content">
                      <span className="card-title">{team.name}</span>
                      <p className="subtext">{team.description}</p>
                    </div>
                    <div className="card-action">
                      {team.members.map((member, key)=>(
                        (key <= 4) ? <StaffDp key={key} teamId={team._id} userId={member}/> : ''
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TeamList;
