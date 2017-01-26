import React from 'react';

class NotificationBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="notification badge red">4</span>
    );
  }
}

export default NotificationBadge;
