import React from 'react';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
// TODO:move sidenav to right
  render() {
    return (

      <ul id="nav-mobile" className="side-nav right hide-on-large-only">
        <li><a href="">
          <i className="mdi-communication-email"></i>
          <span>Mailbox</span>
        </a></li>
        <li><a href=""><i className="material-icons">view_module</i></a></li>
        <li><a href=""><i className="material-icons">refresh</i></a></li>
        <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a></li>
      </ul>
    );
  }
}

export default SideNav;
