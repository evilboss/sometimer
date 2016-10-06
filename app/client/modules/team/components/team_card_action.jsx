import React from 'react';

class TeamCardAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teamRoute = this.props.teamRoute;
    return (
      <div className="card-hover-action valign-wrapper">
        <div className="action-buttons">
          <a href={teamRoute} className="btn">Edit / Manage</a>
          <a href="" className="btn">Delete Team</a>
        </div>
      </div>
    );
  }
}

export default TeamCardAction;
