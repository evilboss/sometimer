import React from 'react';
import moment from 'moment';
import TimeIn from './status/time_in';
class TimeTracker extends React.Component {
  constructor(props) {
    super(props);

  };

  handleClick() {
    var status = this.state.status;
    (status == 'Out') ? this.setState({status: 'In'}) : this.setState({status: 'Out'});
    Meteor.call('timelogs.change-status');
  };

  setTime() {
    this.setState({today: moment().format('LL hh:mm:ss')});
  };

  getTime() {
    return this.state.today;
  }

  componentWillMount() {
    this.setState({loaded: true});

    this.setTime();
  };

  componentDidMount() {
    if (this.state.loaded) {
      window.setInterval(function () {
        this.setTime();
      }.bind(this), 1000);
    }

  };

  componentWillUnmount() {
    this.setState({loaded: false});
  }


  render() {
    let backgroundImage = '/Assets/teams/default/background/bg3.jpg';
    let appLogo = '/Assets/teams/default/logo/remotiv_io_logo_style2.png';
    let boardStyle;
    let inOutLogo = (appLogo) ? inOutLogo = appLogo : '/Assets/teams/ezyva/logo/ezyva-logo.png';
    (backgroundImage) ? boardStyle = {
      backgroundImage: 'url(' + backgroundImage + ')'
    } : '';
    let currentUser = this.props.currentUser;
    return (
      <section id="in-out-board" style={boardStyle}>
        <div className="container">
          {(() => {
            return (currentUser) ? <section id="userSigned">
              <div className="row">
                <div className="col s12">
                  <div className="wrapper">
                    <div className="header-wrapper z-depth-3">
                      <div className="logo">
                        <img src={inOutLogo}/>
                      </div>
                      <div className="right center-align">

                        <ul className="no-margin">
                          <li><a href="/dashboard/timesheet" className="theme-text">
                            <i className="material-icons">grid_on</i><span>Timesheet</span></a>
                          </li>
                          <li><a href="/dashboard" className="theme-text">
                            <i className="material-icons">dashboard</i><span>Dashboard</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {(() => {
                      return (currentUser.profile) ?
                        <div className="container">
                          <div className="row">
                            <div className="col l4 m4 s12 center-align">
                              <img
                                src={(currentUser.profile.displayPhoto) ? '/uploads/' + currentUser.profile.displayPhoto : 'http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'}
                                alt="dp"
                                className="display-photo circle responsive-img"/>
                            </div>
                            <div className="staff-details col l8 m8 s12">
                              <div><h4>{currentUser.profile.firstName + ' ' + currentUser.profile.lastName}</h4>
                                <p><i className="material-icons left">work</i>{currentUser.profile.jobTitle}</p>

                                <TimeIn/>
                              </div>
                              <div className="row no-vertical-margin">
                                <div className="col s12">
                                  <div className="current-log"><p><b>Current Log: </b> {currentUser.profile.status}</p>
                                  </div>
                                  <div className={currentUser.profile.status + ' beacon z-depth-1'}></div>
                                </div>
                              </div>
                              <div><b>Date Today:</b> {this.getTime()}</div>
                            </div>
                          </div>
                        </div> : ''
                    })()}
                  </div>
                </div>
              </div>
            </section>
              : <section id="user-required">
              <h1>User is required please sign in</h1>
            </section>;
          })()}
        </div>
      </section>
    );
  };
}

export default TimeTracker;
