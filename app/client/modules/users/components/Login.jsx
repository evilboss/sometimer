import React from 'react';
import Formsy from 'formsy-react';
import {
  Input,
  Row,
} from 'formsy-react-components';
/*TODO : @aaron fixed login layout and validation*/
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.validSubmit = (data)=> {
      this.props.submitAction(data.email, data.password);
    };
    this.invalidSubmit = ()=> {

    };
  }

  render() {

    let formClassName = 'vertical m-t';
    const {error} = this.props;
    return (
      <section className="blue-theme" id="login">

        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="header-wrapper center-align">

                <div className="big-logo">
                  <img className="responsive-img" src="/Assets/teams/default/logo/remotiv_io_logo_style1.png"/>
                </div>

                <div className="container">
                  <div className="form row circular-border">
                    <div className="theme-color ribbon">
                      Login
                    </div>


                    <Formsy.Form className={formClassName}
                                 onValidSubmit={this.validSubmit}
                                 onInvalidSubmit={this.invalidSubmit}
                                 onChange={this.onChange}
                                 ref="form">

                      {error ?
                        <div className="alert alert-danger" onClick="">
                          <span className="octicon octicon-megaphone"></span>
                          {error}
                        </div> : null }

                      <Input
                        name="email"
                        value=""
                        label="Email"
                        type="email"
                        autoComplete="off"
                        validations="isEmail"
                        validationError="Please provide a valid email address."

                      />
                      <Input
                        name="password"
                        value=""
                        label="Password"
                        type="password"
                        validations="minLength:4"
                        validationError="That password looks a bit short, try again"

                      />

                      <input className="btn waves-effect waves-light theme-color"
                             formNoValidate={true}
                             type="submit"
                             defaultValue="Login"/>
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
}

export default Login;
