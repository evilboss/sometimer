import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="blue-theme" id="login">

        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="header-wrapper center-align">

                <div className="logo">
                  <img className="responsive-img" src="/Assets/teams/ezyva/logo/ezyva-logo.png"/>
                </div>

                <div className="container">
                  <div className="form row circular-border">
                    <div className="theme-color ribbon">
                      Login
                    </div>
                    <div className="row">
                      <form className="col s12">
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label for="email">Email</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label for="password">Password</label>
                          </div>
                        </div>
                        <button className="btn waves-effect waves-light theme-color" type="submit" name="action">Login
                          <i className="material-icons right">send</i>
                        </button>
                      </form>
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

export default Login;
