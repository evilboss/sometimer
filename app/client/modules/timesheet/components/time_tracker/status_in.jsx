import React from 'react';

class StatusIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="input-field">
        <a href='/dashboard/timetracker' className="status">
          Logged In
          <div className="status-indicator In"></div>
        </a>
      </div>
    );
  }
}

export default StatusIn;
