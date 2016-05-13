import React from 'react';
import Formsy from 'formsy-react';
import {Input} from 'formsy-react-components';


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
                    <Formsy.Form className="col s12"
                                 onValidSubmit={this.validSubmit.bind(this)}
                                 ref="form">
                      {error ?
                        <div className="alert alert-danger" onClick="">
                          <span className="octicon octicon-megaphone"></span>
                          {error}
                        </div> : null }
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        autoComplete="off"
                        validations="isEmail"
                        validationError="Please provide a valid email address."
                        required
                      />
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />

                      <div className="submit">
                        <button className="button button-block bg-green" type="submit">SIGN IN
                        </button>
                      </div>


                    </Formsy.Form>
                  </div>
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