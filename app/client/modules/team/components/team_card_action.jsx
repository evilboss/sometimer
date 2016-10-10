import React from 'react';

class TeamCardAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teamRoute = this.props.teamRoute;
    return (
      <div className="card-hover-action">
        <div className="clearfix"><i className="right material-icons close">delete_forever</i></div>
        <div className="action-buttons">
          <a href="" className="btn">Edit / Manage</a>
          <a href={teamRoute} className="btn">View Team</a>
        </div>
      </div>
    );
  }
}

export default TeamCardAction;
