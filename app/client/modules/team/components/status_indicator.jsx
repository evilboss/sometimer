import React from 'react';

class StatusIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const indicatorClass = this.props.class;
    return (
      <div>
        <div className={`status-indicator ${indicatorClass}`}>
        </div>
        <span> {indicatorClass}</span>
      </div>
    );
  }
}

export default StatusIndicator;
