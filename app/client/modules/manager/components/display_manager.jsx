import React from 'react';

class DisplayManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {teamLeader} = this.props;
    return (
      <div>
        <img
          src={`/uploads/${(teamLeader.displayPhoto)?teamLeader.displayPhoto:'defaults/default_user.png'}`}
          alt="Team Lead" className="circle responsive-img dp-small left"/>
        <div className="col s8 staff-details no-margin">
          <h6>{teamLeader.firstName} {teamLeader.lastName}<br/>
            <small>{teamLeader.jobTitle}</small>
          </h6>
        </div>
      </div>
    );
  }
}

export default DisplayManager;
