import React from 'react';

class InOutBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Out'
    };
  }

  handleClick() {
    var status = this.state.status;
    console.log(status);
    (status == 'Out') ? this.setState({status: 'In'}) : this.setState({status: 'Out'});
  }

  render() {
    let backgroundImage = '/Assets/teams/ezyva/background/bg.jpg';
    let appLogo = '/Assets/teams/ezyva/logo/ezyva-logo.png';
    let boardStyle;
    let inOutLogo = (appLogo) ? inOutLogo = appLogo : '/Assets/teams/default/logo/remotiv_io_logo_style2.png';
    (backgroundImage) ? boardStyle = {
      backgroundImage: 'url(' + backgroundImage + ')'
    } : '';

    return (
      <section id="in-out-board" style={boardStyle}>
        <div className="container">
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
                          <div className="current-log"><p><b>Current Log -</b> {this.state.status}</p></div>
                          <div className={this.state.status +' beacon z-depth-1'}></div>
                        </div>
                      </div>
                      <div>Date Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default InOutBoard;
