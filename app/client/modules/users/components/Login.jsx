import React from 'react';
import {Form} from 'formsy-react';

import MyInput from './input';
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
                    <Form onSubmit={this.validSubmit} onValid={this.validSubmit} onInvalid={this.invalidSubmit}
                          className="login">
                      <MyInput name="email" title="Email" validations="isEmail"
                               validationError="This is not a valid email" required/>
                      <MyInput name="password" title="Password" type="password" required/>
                      <button className="btn waves-effect waves-light theme-color" type="submit">Login <i
                        className="material-icons right">send</i></button>
                    </Form>

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
