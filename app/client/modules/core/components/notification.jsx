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
    const {requestCount, currentUser} = this.props;
    return (
      <div>
        <a href="" className="notification-menu" data-activates="notification-menu">
          <i className="material-icons">notifications</i>
          {(currentUser.profile) ?
            (currentUser.profile.role) ?
              (currentUser.profile.role == 'admin' || currentUser.profile.role == 'manager') ?
                (requestCount) ? <small className="notification-badge">{requestCount}</small> : ''
                : ''
              : ''
            : ''}

        </a>

        {(currentUser.profile) ?
          (currentUser.profile.role) ?
            (currentUser.profile.role == 'admin' || currentUser.profile.role == 'manager') ?
              <ul id='notification-menu' className='dropdown-content'>
                <li>
                  <a href="/dashboard/timesheet/request">
                    Timelog Request
                    {(requestCount) ? <small className="notification-badge right">{requestCount}</small> : ''}
                  </a>
                </li>
              </ul>
              : ''
            : ''
          : ''}


      </div>
    );
  }
}

export default Notification;
