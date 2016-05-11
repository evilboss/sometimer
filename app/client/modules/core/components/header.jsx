import React from 'react';
import Navbar from './navbar.jsx';
import SideNav from './side_nav.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section id="header">
          <nav>
            <div className="nav-wrapper cyan">
              <a href="#!" className="brand-logo">Remotiv-App</a>
              <ul className="right">
                <li>
                  <a href="#" data-activates="nav-mobile" className="button-collapse btn-menu"><i
                    className="material-icons">menu</i></a>
                </li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li><a href=""><i className="mdi-social-notifications"></i></a></li>
                <li><a href=""><i className="material-icons">view_module</i></a></li>
                <li><a href=""><i className="material-icons">refresh</i></a></li>
                <li><a href="" onClick={this.toggleFullscreen}><i className="material-icons">settings_overscan</i></a>
                </li>
              </ul>
              <SideNav />
            </div>
          </nav>
        </section>
        <Navbar />
      </div>
    );
  }
}

export default Header;


