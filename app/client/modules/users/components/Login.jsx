import React from 'react';
import Formsy from 'formsy-react';

import MyInput from '../../../utils/form/input';
import PageTitle from '/client/modules/core/components/page_title';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = (data)=> {
      this.props.submitAction(data.email, data.password);
    };
    this.validSubmit = (data)=> {

    };
    this.invalidSubmit = ()=> {

    };
  }

  render() {
    const {err} = this.props;
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

                    <PageTitle title='Login'/>
                    {err ?
                      <span className="error-container">
                        <span className="error-text">
                          {err}
                        </span>
                      </span> : null }
                    <Formsy.Form onSubmit={this.onSubmit} onValid={this.validSubmit} onInvalid={this.invalidSubmit}
                                 className="login">
                      <MyInput name="email" title="Email" validations="isEmail"
                               validationError="This is not a valid email" required/>
                      <MyInput name="password" title="Password" type="password" required/>
                      <button className="btn waves-effect waves-light theme-color" type="submit">Login <i
                        className="material-icons right">send</i></button>
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
