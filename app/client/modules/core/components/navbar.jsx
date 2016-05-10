import React from 'react';
import Screenfull from 'screenfull';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFullscreen = ()=> {
      Screenfull.enabled ? Screenfull.toggle() : void 0;
    };
  }

  render() {
    return (

      <nav>
        <div className="nav-wrapper cyan">
          <a href="#!" className="brand-logo">Remotiv-App</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i
            className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href=""><i className="mdi-social-notifications"></i></a></li>
            <li><a href=""><i className="material-icons">view_module</i></a></li>
            <li><a href=""><i className="material-icons">refresh</i></a></li>
            <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href=""><i className="mdi-social-notifications"></i></a></li>
            <li><a href=""><i className="material-icons">view_module</i></a></li>
            <li><a href=""><i className="material-icons">refresh</i></a></li>
            <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
