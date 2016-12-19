import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

class Invite extends React.Component {
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
                <div className="big-logo">
                  <img className="responsive-img" src="/Assets/teams/default/logo/Remotiv_logo_square_onblack.png"/>
                </div>
                <div className="container">
                  <div className="form row circular-border">
                    <div>
                      <a className="btn activate-account theme-color" href={`/invite/activate/${this.props.token}`}>
                        click here to activate your account
                      </a>
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
export default Invite;
