import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {
  render() {
    return (
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="header-wrapper center-align">

                <div className="logo">
                  <img className="responsive-img" src="Assets/logo/ezyva-logo.png"/>
                </div>

                <div className="container">
                  <div className="form row">

                    <div className="blue ribbon">
                      Login
                    </div>

                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <i className="material-icons prefix">email</i>
                          <input id="icon_prefix" type="email" className="validate"/>
                          <label for="icon_prefix">Email</label>
                        </div>
                        <div className="input-field col s12">
                          <i className="material-icons prefix">lock</i>
                          <input id="icon_telephone" type="tel" className="validate"/>
                          <label for="icon_telephone">Password</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <a className="waves-effect waves-light btn btn-large yellow darken-2">
                  <i className="material-icons left">input</i>Sign In</a>

              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }

  login(event) {
    this.props.login(ReactDOM.findDOMNode(this.refs.email).value, ReactDOM.findDOMNode(this.refs.password).value);
  }
}
export default Login;