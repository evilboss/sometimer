import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import {TimeIn, TimeOut, BackToWork} from './status/index';
var timerId;
class TimeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateToday: moment().format('LL'),
      timeToday: moment().format('LTS'),
      loaded: false,
    }
  };

  changeStatus() {
    var status = this.state.status;
    (status == 'Out') ? this.setState({status: 'In'}) : this.setState({status: 'Out'});
    Meteor.call('timelogs.change-status');
  };

  startShift() {
    Meteor.call('timelogs.startShift');
  };

  endShift() {
    Meteor.call('timelogs.endShift');
  };

  startBreak() {
    Meteor.call('timelogs.startBreak');
  };

  endBreak() {
    Meteor.call('timelogs.endBreak');
  };

  setDate() {
    this.setState({dateToday: moment().format('LL')});
  };

  setTime() {
    let {currentUser} =this.props;
    let timezone = (currentUser) ?
      (currentUser.profile) ?
        (currentUser.profile.timezone) ?
          currentUser.profile.timezone
          : 'Asia/Manila'
        : 'Asia/Manila'
      : 'Asia/Manila';
    this.setState({timeToday: moment().tz(timezone).format('LTS z')});
  };

  getDate() {
    return this.state.dateToday;
  }

  getTime() {
    return this.state.timeToday;
  }

  componentWillMount() {
    this.setState({loaded: true});
    this.setTime();
    this.setDate();
  };

  componentWillUnMount() {
    this.setState({loaded: false});
  };

  componentDidMount() {
    if (this.state.loaded) {
      timerId = setInterval(function () {
        this.setTime();
        this.setDate();
      }.bind(this), 1000);
    }
  };

  componentWillUnmount() {
    this.setState({loaded: false});
    clearInterval(timerId);
  }

  render() {
    let backgroundImage = '/Assets/teams/default/background/punchcard_bg.png';
    let appLogo = '/Assets/teams/default/logo/Remotiv_logo_horizontal_onblack.png';
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
                          <li><a href="/dashboard/team" className="theme-text">
                            <i className="material-icons">exit_to_app</i><span>Exit Time tracker</span></a>
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
                                src={(currentUser.profile.displayPhoto) ? currentUser.profile.displayPhoto : '/uploads/defaults/default-img.png'}
                                alt="dp"
                                className="display-photo circle responsive-img"/>
                            </div>
                            <div className="staff-details col l8 m8 s12">
                              <div><h3>{currentUser.profile.firstName + ' ' + currentUser.profile.lastName}</h3>
                                <h5>{currentUser.profile.jobTitle}</h5>
                                <div className="status">
                                  <TimeIn action={this.startShift.bind(this)}
                                          status={(currentUser.profile.status == 'completed') ? '' : currentUser.profile.status}/>
                                  <TimeOut endShiftAction={this.endShift.bind(this)}
                                           startBreakAction={this.startBreak.bind(this)}
                                           status={currentUser.profile.status}/>
                                  <BackToWork action={this.endBreak.bind(this) } status={currentUser.profile.status}/>
                                </div>
                              </div>
                              <div className="row no-vertical-margin">
                              </div>
                              <h3 className="time">{this.getTime()}</h3>
                              <div><b>
                                {(currentUser.profile.timezone) ? formatHelper.getCountry(currentUser.profile.timezone) : 'Manila'}
                              </b></div>
                              <div><b>{this.getDate()}</b></div>
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
