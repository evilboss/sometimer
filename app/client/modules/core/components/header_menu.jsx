import React from "react";
import NavbarProfile from "./navbar_profile";
import TimeTracker from "/client/modules/timesheet/containers/time_tracker";
import {formatHelper} from "/client/utils/helpers/format-helpers";
import {domainHelpers} from "/client/utils/helpers/domain-helpers";

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

    $('.status').dropdown({
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
    $('select').material_select();
  };

  componentDidUpdate() {
    this.initDropdown();
    $('select').material_select();
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
                  <span>{formatHelper.capsAll(domainHelpers.getSubdomain())}</span>
                </a>


                <ul className="right">
                  <li>Welcome
                    back, {(currentUser.profile) ? (currentUser.profile.firstName) ? currentUser.profile.firstName : '' : ''}!
                    <span></span>
                  </li>

                  <li className="time-log-status">
                    <TimeTracker/>
                  </li>

                  <li>
                    <a href='' className="account-menu" data-activates='account-menu'>
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
