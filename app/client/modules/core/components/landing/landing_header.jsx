import React from 'react';

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="landing-header z-depth-0">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo">
            <img className="inline" src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/>
            <div className="remotiv-text inline">
              <h5>Remotiv<span>.io</span></h5>
              <h6>Business Beyond Boundaries</h6>
            </div>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Product</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Support</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LandingHeader;
