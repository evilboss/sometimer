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
                  <div className="right">
                    <a href=""><i className="material-icons">settings_overscan</i></a>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col l6 m6 s12 center-align">
                      <img src="http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg" alt="dp"
                           className="display-photo circle responsive-img"/>
                    </div>
                    <div className="col l6 m6 s12">This div is 6-columns wide</div>
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
