import React from 'react';
import Navbar from './navbar.jsx';
import SideNav from './side_nav.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = ()=> {

    };
    this.componentDidMount = () => {
      $('.account-menu').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false,
          belowOrigin: true,
          alignment: 'left'
        }
      );
    };
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
                <li>
                  <a href='#' className="account-menu" data-activates='account-menu'>
                    <img className="inline"
                         src="http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg"/>
                    <i className="right material-icons">arrow_drop_down</i>
                  </a>
                  <ul id='account-menu' className='dropdown-content cyan-text'>
                    <li><a href="/profile">Profile
                      <i className="material-icons right">account_box</i></a></li>
                    <li className="divider"></li>
                    <li><a href="" onclick={this.logOut()}>Log out
                      <i className="material-icons right">exit_to_app</i></a></li>
                  </ul>
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


