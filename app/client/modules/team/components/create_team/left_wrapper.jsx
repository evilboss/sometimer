import React from 'react';

class LeftWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-wrapper col s12 m12 l5">

        <div className="header">
          <img src="/Assets/teams/default/logo/logo.png" className="brand-logo"/>
        </div>

        <div className="content container">
          <h5>Create a New Team</h5>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" class="validate"/>
              <label for="email">Email Address</label>
            </div>
            <p className="subtext center-align">
              (Don’t worry about setting a password right now, we’ll e-mail you a link to create one)</p>
          </div>
        </div>

        <div className="page-footer center-align">

          <p>
            <input type="checkbox" id="test5"/>
            <label for="test5"> It's ok to send me (very occasional)
              <br className="hide-on-small-only"/>
              email about the Slack service.</label>
          </p>

          <a className="waves-effect waves-light btn-large amber darken-2"><i className="material-icons right">navigate_next</i>Next</a>
        </div>
      </div>
    );
  }
}

export default LeftWrapper;
