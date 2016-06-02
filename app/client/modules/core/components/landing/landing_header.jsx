import React from 'react';

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="landing-header z-depth-0">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo"><img src="/Assets/teams/default/logo/logo.png"/></a>
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
