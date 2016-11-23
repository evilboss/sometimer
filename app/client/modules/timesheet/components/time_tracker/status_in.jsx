import React from 'react';

class StatusIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="input-field">
        <a href='/dashboard/timetracker' className="status">
          Enter Time Tracker<br/>
          <div className="status-indicator In"></div>
        </a>
      </div>
    );
  }
}

export default StatusIn;
