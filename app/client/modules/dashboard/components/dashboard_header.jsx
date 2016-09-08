import React from 'react';
import NavbarProfile from '../../core/components/navbar_profile';
class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);

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
    const currentUser = this.props.currentUser;
    return (
      <section id="header">
        <nav>
          <div className="nav-wrapper">
            <a href="/dashboard" className="brand-logo">
              <div className="remotiv-text inline">Company Logo</div>
            </a>
            <ul className="right">
              <li>
                <a href="#" data-activates="nav-mobile" className="button-collapse btn-menu"><i
                  className="material-icons">menu</i></a>
              </li>
            </ul>

            <ul className="right hide-on-med-and-down">
              <li>Welcome back, {currentUser.profile.firstName}!
                <span></span>
              </li>
              <li><a href="">
                <i className="mdi-social-notifications"></i>
              </a></li>
              <li>
                <a href='#' className="account-menu" data-activates='account-menu'>
                  <img className="inline"
                       src={(currentUser.profile.displayPhoto) ? `/uploads/${currentUser.profile.displayPhoto}` : '/uploads/defaults/default-img.png'}/>
                </a>
                <NavbarProfile />
              </li>
              <li>
                <a href="">
                  <i className="material-icons">settings</i>
                </a>
              </li>
              <li><img className="inline" src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/></li>
            </ul>

          </div>
        </nav>
      </section>
    );
  }
}

export default DashboardHeader;
