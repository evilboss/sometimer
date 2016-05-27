import React from 'react';

class InOutBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let status = '';
    let handleClick = function (event) {
      (status) ? status = '' : status = 'in';
      if (status) {
        console.log('yes');
      } else {
        console.log('no');
      }
    }
    let backgroundImage ='/Assets/teams/ezyva/background/bg.jpg';
    let appLogo ='/Assets/teams/ezyva/logo/ezyva-logo.png';
    let boardStyle;
    let inOutLogo = (appLogo)? inOutLogo = appLogo:'/Assets/teams/default/logo/logo.png';
    (backgroundImage)?boardStyle ={
      backgroundImage: 'url(' + backgroundImage + ')'
    }:'';
    let getStatus = function () {
      return status;
    }
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
                                onClick={handleClick}>
                          <i className="material-icons left">cached</i>
                          Click to Change Status
                        </button>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <div className="current-log"><p><b>Current Log -</b> Out</p></div>
                          <div className={getStatus() +' beacon z-depth-1'}></div>
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
