import React from "react";
import SideNav from "./side_nav.jsx";
import NavbarProfile from "./navbar_profile";
import Notification from "../containers/notification";

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  initDropdown() {
    $('.account-menu').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        belowOrigin: true,
        alignment: 'left'
      }
    );
  }

  componentDidMount() {
    this.initDropdown();
  };

  componentDidUpdate() {
    this.initDropdown();
  };

  render() {
    let {currentUser, sitePhoto} = this.props;
    return (
      <div>
        {(currentUser) ? (currentUser.profile) ?
          <section id="header">
            <nav>
              <div className="nav-wrapper">
                <a href="/dashboard/team" className="brand-logo">
                  <div className="inline">
                    <img
                      src={(sitePhoto) ? sitePhoto : '/Assets/teams/default/logo/Remotiv_logo_horizontal_onblack.png'}/>
                  </div>
                </a>
                <ul className="right">
                  <li>
                    <a href="#" data-activates="nav-mobile" className="button-collapse btn-menu"><i
                      className="material-icons">menu</i></a>
                  </li>
                </ul>

                <ul className="right">
                  <li>Welcome
                    back, {(currentUser.profile) ? (currentUser.profile.firstName) ? currentUser.profile.firstName : '' : ''}!
                    <span></span>
                  </li>
                  <li>
                    <Notification currentUser={currentUser}/>

                  </li>
                  <li>
                    <a href='#' className="account-menu" data-activates='account-menu'>
                      <img className="inline"
                           src={(currentUser.profile.displayPhoto) ? `${currentUser.profile.displayPhoto}` : '/uploads/defaults/default-img.png'}/>
                    </a>
                    <NavbarProfile />
                  </li>
                  {(currentUser.profile.role === 'admin') ?
                    <li>
                      <a href="/dashboard/settings">
                        <i className="material-icons">settings</i>
                      </a>
                    </li>
                    : ''}
                  <li>
                    <img className="inline"
                         src={sitePhoto ? sitePhoto : '/Assets/teams/default/logo/remotiv_io_logo_style3.png'}/></li>
                </ul>
              </div>
            </nav>
          </section> : '' : ''}
      </div>
    );
  }
}

export default HeaderMenu;
