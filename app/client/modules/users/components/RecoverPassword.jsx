import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';

class RecoverPassword extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = (data)=> {
      this.props.recoverPassword(data.email);
    };
  }

  validSubmit(data) {

  };

  invalidSubmit() {

  };

  render() {
    const {err} = this.props;
    return (
      <section className="blue-theme twbs" id="login">

        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="header-wrapper center-align">

                <div className="big-logo">
                  <img className="responsive-img" src="/Assets/teams/default/logo/Remotiv_logo_square_onblack.png"/>
                </div>

                <div className="container">
                  <div className="form row circular-border">
                    <PageTitle title='Recover Password'/>
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
                      <button className="btn waves-effect waves-light theme-color" type="submit">Send
                        <i className="material-icons right">send</i></button>
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
export default RecoverPassword;