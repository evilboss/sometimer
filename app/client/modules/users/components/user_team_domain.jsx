import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

class UserTeamDomain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: '',
    };
  }

  changeDomain() {
    let {domain} = this.refs;
    console.log(domain.value);
    this.setState({domain: domain.value})
    console.log(this.state);
  }

  render() {
    const {path} = this.props;
    return (
      <section className="blue-theme" id="login">

        <div className="container twbs">
          <div className="row">
            <div className="col s12">
              <div className="header-wrapper center-align">

                <div className="big-logo">
                  <img className="responsive-img" src="/Assets/teams/default/logo/Remotiv_logo_square_onblack.png"/>
                </div>

                <div className="container">
                  <div className="form row circular-border">

                    <PageTitle title='Sign in to your team'/>
                    <h6>Enter your team's <b>Remotiv domain</b>.</h6>
                    <div className="domain-form input-field col s12">
                      <input type="text" id="domain" value={this.state.domain} onChange={this.changeDomain.bind(this)}
                             className="active col s4"
                             ref="domain"/>
                      <label htmlFor="domain" className="active">Team Domain</label>
                      <span>.remotiv.io</span>
                    </div>

                    <div className="col s12">
                      <a href={`${domainHelpers.addSubdomain(this.state.domain)}login`} className="btn">Continue</a>
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

export default UserTeamDomain;
