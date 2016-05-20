import React from 'react';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    
  }

// TODO:move sidenav to right
  render() {
    return (
      <section id="side-nav">
        <ul id="nav-mobile" className="side-nav fixed right hide-on-large-only">
          <li className="bold">
            <a href="" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i><span> Dashboard</span></a>
          </li>
          <li><a href=""><i className="material-icons">view_module</i></a></li>
          <li><a href=""><i className="material-icons">refresh</i></a></li>
          <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a></li>
          <li><a href="/login">Login</a></li>

        </ul>
      </section>
    );
  }
}

export default SideNav;
