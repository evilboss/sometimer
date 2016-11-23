import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

class Activate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: ''
    }
  }

  _saveUser() {
    const invite = {
      token: this.props.inviteId,
      password: this.refs.password.value
    };
    const callback = (params)=> {
      console.log(params);
    };
    Meteor.call('invitation.activate', invite, (error, result)=> {
      (error) ? this.setState({err: error.details}) : (result) ? FlowRouter.go('/login') : '';
    });


  };


  _clearError() {
    this.setState({err: ''})
  }

  _createAccount() {
    let err;
    this._clearError();
    const password = this.refs.password.value;
    const password_confirm = this.refs.password_confirm.value;
    err = (password || password_confirm) ?
      ((password.length >= 6)) ?
        (password == password_confirm) ? ''
          : 'Password does not match'
        : 'password lenght must be more than equal to 6 characters'
      : 'password must not be blank';
    (err) ? this.setState({err: err}) : this._saveUser();
  }

  render() {
    const {err} = this.state;
    return (
      <section className="blue-theme" id="login">

        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="header-wrapper center-align">
                <div className="big-logo">
                  <img className="responsive-img" src="/Assets/teams/default/logo/Remotiv_logo_square_onblack.png"/>
                </div>
                <div className="container">
                  <div className="form row circular-border">
                    <PageTitle title='Create your Account'/>

                    {err ?
                      <span className="error-container">
                          <span className="error-text">
                            {err}
                          </span>
                        </span>
                      : '' }
                    <div className="form twbs">
                      <div className="row form-group required col s12">

                        <div className="input-field initial-text-align no-margin-bottom">
                          <input id="new_password" ref="password" autoComplete="off" type="password"/>
                          <label htmlFor="password" className="active">Password</label>
                        </div>
                      </div>
                      <div className="row form-group required col s12">
                        <div className="input-field initial-text-align no-margin-bottom">
                          <input id="password_confirm" ref="password_confirm" autoComplete="off" type="password"/>
                          <label htmlFor="password" className="active">Confirm Password</label>
                        </div>
                      </div>
                      <button className="btn waves-effect waves-light theme-color"
                              onClick={this._createAccount.bind(this)}> Create your Account
                      </button>
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
export default Activate;

