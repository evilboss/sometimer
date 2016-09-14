import React from 'react';

class Notification extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.notification-menu').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        belowOrigin: true,
        alignment: 'left'
      }
    );
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <a href="" className="notification-menu" data-activates="notification-menu">
          <i className="mdi-social-notifications"></i>
          <small className="notification-badge">5</small>
        </a>
        <ul id='notification-menu' className='dropdown-content'>
          {(currentUser.profile) ?
            (currentUser.profile.role) ?
              (currentUser.profile.role == 'admin' || currentUser.profile.role == 'manager') ?
                <li>
                  <a href="/dashboard/timesheet/request">
                    Timelog Request
                    <small className="notification-badge right">5</small>
                  </a>
                </li>
                : ''
              : ''
            : ''}
          <li><a>Notifications
            <i className="material-icons right">exit_to_app</i></a></li>
        </ul>
      </div>
    );
  }
}

export default Notification;
