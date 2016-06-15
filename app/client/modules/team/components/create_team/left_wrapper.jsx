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
      <div className="left-wrapper col s12 m12 l5">

        <div className="header">
          <img src="/Assets/teams/default/logo/logo.png" className="brand-logo"/>
        </div>

        <div className="content container">
          <h5>Create a New Team</h5>
          {(() => {
            switch (this.props.formData) {
              case "team.create.name":   return <TeamName/>;
              case "team.create.members": return <TeamMembers/>;
              default:      return <TeamEmail/>;
            }
          })()}
        </div>


      </div>
    );
  }
}

export default LeftWrapper;
