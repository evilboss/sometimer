import React from 'react';
import Navbar from './navbar.jsx';
import SideNav from './side_nav.jsx';
import  NavbarProfile from './navbar_profile';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.account-menu').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        belowOrigin: true,
        alignment: 'left'
      }
    );
  };

  render() {
    return (
      <div>
        <section id="header">
          <nav>
            <div className="nav-wrapper">
              <a href="/dashboard" className="brand-logo">
                <img className="inline" src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/>
                <div className="remotiv-text inline"><h5>Remotiv<span>.io</span>
                </h5><h6 className="sub-text">Business Beyond Boundaries</h6></div>
              </a>
              <ul className="right">
                <li>
                  <a href="#" data-activates="nav-mobile" className="button-collapse btn-menu"><i
                    className="material-icons">menu</i></a>
                </li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li><a href=""><i className="mdi-social-notifications"></i></a></li>
                <li>
                  <a href='#' className="account-menu" data-activates='account-menu'>
                    <img className="inline"
                         src="http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg"/>
                    <i className="right material-icons">arrow_drop_down</i>
                  </a>
                  <NavbarProfile />
                </li>
              </ul>

              <SideNav />
            </div>
          </nav>
        </section>
        <Navbar menu={this.props.menu}/>
      </div>
    );
  }
}

export default Header;


