import React from 'react';

class StatusOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-field">
        <a href='/dashboard/timetracker' className="status">
          Enter Time Tracker
          <div className="status-indicator Out"></div>
        </a>
      </div>

    );
  }
}

export default StatusOut;
