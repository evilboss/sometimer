import React from 'react';

class DashboardHeader extends React.Component {
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
      <section id="header">
        <nav>
          <div className="nav-wrapper cyan">
            <a href="#!" className="brand-logo">Remotiv-App</a>
            <ul className="right">
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
                  <li><a href="#!">two</a></li>
                  <li className="divider"></li>
                  <li><a href="" onclick={this.logOut()}>Log out
                    <i className="material-icons right">exit_to_app</i></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default DashboardHeader;
