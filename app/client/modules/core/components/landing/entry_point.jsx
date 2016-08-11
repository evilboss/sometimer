import React from 'react';
import Background from './landing_background';
import CreateTeamButton from './create_team_button';
class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <section className="entry-point">

        <Background />
        <div className="center-align container body">
          <div className="remotiv-background"></div>
          <div className="big-logo">
            <img src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/>
          </div>
          <div className="remotiv-text">
            <h1>Remotiv<span>.io</span></h1>
            <h5 className="sub-text">Business Beyond Boundaries</h5>
          </div>
          <CreateTeamButton />
        </div>
      </section>
    );
  }
}

export default EntryPoint;
