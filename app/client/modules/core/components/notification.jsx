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
    const requestCount = this.props.requestCount;
    const currentUser = this.props.currentUser;
    console.log(requestCount);
    return (
      <div>
        <a href="" className="notification-menu" data-activates="notification-menu">
          <i className="mdi-social-notifications"></i>
          {(requestCount) ? <small className="notification-badge">{requestCount}</small> : ''}
        </a>
        <ul id='notification-menu' className='dropdown-content'>
          {(currentUser.profile) ?
            (currentUser.profile.role) ?
              (currentUser.profile.role == 'admin' || currentUser.profile.role == 'manager') ?
                <li>
                  <a href="/dashboard/timesheet/request">
                    Timelog Request
                    {(requestCount) ? <small className="notification-badge right">{requestCount}</small> : ''}
                  </a>
                </li>
                : ''
              : ''
            : ''}

        </ul>
      </div>
    );
  }
}

export default Notification;
