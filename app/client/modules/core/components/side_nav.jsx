import React from 'react';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="side-nav" id="mobile-mode">
        <li><a href=""><i className="mdi-social-notifications"></i></a></li>
        <li><a href=""><i className="material-icons">view_module</i></a></li>
        <li><a href=""><i className="material-icons">refresh</i></a></li>
        <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a></li>
      </ul>
    );
  }
}

export default SideNav;
