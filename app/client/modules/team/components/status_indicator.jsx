import React from 'react';

class StatusIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const indicatorClass = this.props.class;
    return (
      <div className="right">
        <span>{indicatorClass} </span>
        <div className={`status-indicator ${indicatorClass}`}>
        </div>
      </div>
    );
  }
}

export default StatusIndicator;
