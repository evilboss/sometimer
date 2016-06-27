import React from 'react';
import moment from 'moment';
import Time from 'react-time'

class InOutBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Out'
    };
  };

  handleClick() {
    var status = this.state.status;
    (status == 'Out') ? this.setState({status: 'In'}) : this.setState({status: 'Out'});
    Meteor.call('timelogs.change-status');
  };

  setTime() {
    this.setState({today: moment().format('LL hh:mm:ss')});
  };
  getTime(){
    return this.state.today;
  }

  componentWillMount() {
    this.setTime();
  };
  componentDidMount() {
    window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  };

  render() {
    let backgroundImage = '/Assets/teams/ezyva/background/bg.jpg';
    let appLogo = '/Assets/teams/ezyva/logo/ezyva-logo.png';
    let boardStyle;
    let inOutLogo = (appLogo) ? inOutLogo = appLogo : '/Assets/teams/default/logo/logo.png';
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
                        <a href="/"><i className="material-icons">dashboard</i>
                          <span>Dashboard</span>
                        </a>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row">
                        <div className="col l4 m4 s12 center-align">
                          <img src="http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg" alt="dp"
                               className="display-photo circle responsive-img"/>
                        </div>
                        <div className="staff-details col l8 m8 s12">
                          <div><h4>Staff Name</h4>
                            <p><i className="material-icons left">work</i>Job Title</p>
                            <button className="ui btn waves-effect waves-light yellow darken-3"
                                    onClick={this.handleClick.bind(this)}>
                              <i className="material-icons left">cached</i>
                              Click to Change Status
                            </button>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <div className="current-log"><p><b>Current Log -</b> {currentUser.profile.status}</p>
                              </div>
                              <div className={currentUser.profile.status +' beacon z-depth-1'}></div>
                            </div>
                          </div>
                          <div>Date Today: {this.getTime()}</div>
                        </div>
                      </div>
                    </div>
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

export default InOutBoard;
