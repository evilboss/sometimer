import React from 'react';

class NotificationBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {approveLogs}= this.props;
    return (
      <span>
        {
          (approveLogs) ?
            <span className="notification badge red">{approveLogs}</span>
            : null
        }
      </span>
    );
  }
}

export default NotificationBadge;
