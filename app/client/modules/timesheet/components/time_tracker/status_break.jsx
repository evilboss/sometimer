import React from 'react';

class StatusBreak extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-field">
        <a href='/dashboard/timetracker' className="status">
          Timetracker
          <div className="status-indicator Break"></div>
        </a>
      </div>
    );
  }
}

export default StatusBreak;
