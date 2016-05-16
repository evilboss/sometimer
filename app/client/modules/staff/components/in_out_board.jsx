import React from 'react';

class InOutBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="in-out-board">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="wrapper">
                <div className="header-wrapper z-depth-3">
                  <div className="logo">
                    <img src="Assets/logo/ezyva-logo.png"/>
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
                      <h4>Staff Name</h4>
                      <p><i className="material-icons left">work</i>Job Title</p>
                      <b><i className="material-icons left">cached</i>Click to Change Status</b>
                      <div>
                        <span className="beacon"></span>
                      </div>
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
