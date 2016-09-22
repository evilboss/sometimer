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
                  <img className="responsive-img" src="/Assets/teams/default/logo/remotiv_io_logo_style1.png"/>
                </div>
                <div className="container">
                  <div className="form row circular-border">
                    <PageTitle title='Thanks for activating your account'/>
                    <div>
                      <a className="btn" href="/login">click here to activate your account</a>
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
