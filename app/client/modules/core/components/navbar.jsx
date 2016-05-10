import React from 'react';
import Screenfull from 'screenfull';
import SideNav from './side_nav.jsx';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFullscreen = ()=> {
      Screenfull.enabled ? Screenfull.toggle() : void 0;
    };
    this.componentDidMount = ()=> {
      $(".button-collapse").sideNav();
    };
  };


  render() {
    return (

      <nav>
        <div className="nav-wrapper cyan">
          <a href="#!" className="brand-logo">Remotiv-App</a>
          <a href="#" data-activates="mobile-mode" className="button-collapse"><i
            className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href=""><i className="mdi-social-notifications"></i></a></li>
            <li><a href=""><i className="material-icons">view_module</i></a></li>
            <li><a href=""><i className="material-icons">refresh</i></a></li>
            <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a></li>
          </ul>
          <SideNav />
        </div>
      </nav>
    );
  }
}

export default Navbar;
