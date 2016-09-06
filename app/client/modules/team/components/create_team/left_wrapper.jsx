import React from 'react';
import TeamEmail from './forms/team_email';
import TeamName from '../../containers/team_name';
import TeamMembers from '../../containers/team_members';
class LeftWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-wrapper col s12 m12 l5 no-margin">

        <div className="header">
          <a href="#" className="brand-logo">
            <img className="inline" src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/>
            <div className="remotiv-text inline"><h5>Remotiv<span>.io</span></h5>
              <h6 className="sub-text">Business Beyond Boundaries</h6></div>
          </a>
        </div>

        <div className="content container">
          <h5>Create a New Team</h5>
          {(() => {
            switch (this.props.formData) {
              case "team.create.name":
                return <TeamName/>;
              case "team.create.members":
                return <TeamMembers/>;
              default:
                return <TeamEmail/>;
            }
          })()}
        </div>
      </div>
    );
  }
}

export default LeftWrapper;
