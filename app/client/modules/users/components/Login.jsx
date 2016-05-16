import React from 'react';
import Formsy from 'formsy-react';
import {Input} from 'formsy-react-components';
import { Accounts } from 'meteor/std:accounts-ui';


class Login extends React.Component {
  render() {
    const {error} = this.props;

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
                  </div>
                  <Accounts.ui.LoginForm />

                </div>


              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }


  resetForm() {
    this.refs.form.reset();
  }

  validSubmit(data) {
    this.props.submitAction(data.email, data.password);
  }

  // invalidSubmit(data) {
  invalidSubmit() {
    // console.log('invalidSubmit', data);
  }

  enableButton() {
    // console.log('enable button');
    this.setState({canSubmit: true});
  }

  disableButton() {
    // console.log('disable button');
    this.setState({canSubmit: false});
  }
}
export default Login;