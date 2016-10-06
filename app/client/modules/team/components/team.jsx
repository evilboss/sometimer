import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import TeamList from '/client/modules/team/containers/team_list';
class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  render() {
    return (
      <section id="team">
        <PageTitle title="All Team"/>
        <div className="row tabs-wrapper">
          <div className="col s7 tab-nav">
            <ul className="tabs">
              <li className="tab col s3"><a href="#ManageTeam" className="active">Manage Team</a></li>
              <li className="tab col s3"><a href="#ManageClients" className="">Manage Clients</a></li>
            </ul>
          </div>

          <div className="col s12 tabs-content no-padding">
            <div id="ManageTeam" className="col s12">
              <TeamList/>
            </div>

            <div id="ManageClients" className="col s12">
utub
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
