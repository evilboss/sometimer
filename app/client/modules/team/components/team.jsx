import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import TeamList from '/client/modules/team/containers/manage_team/team_list';
import Tabs from '/client/modules/team/containers/tabs';


class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="team">
        <PageTitle title="All Team"/>
        <div className="row tabs-wrapper">
          <Tabs/>

          <div className="col s12 tabs-content no-padding">
            <section id="ManageTeam" className="col s12">
              <TeamList/>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
