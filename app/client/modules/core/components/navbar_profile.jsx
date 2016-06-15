import React from 'react';

class NavbarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = ()=> {

    };
  }


  render() {
    return (
      <ul id='account-menu' className='dropdown-content cyan-text'>
        <li><a href="/profile">Profile
          <i className="material-icons right">account_box</i></a></li>
        <li className="divider"></li>
        <li><a href="" onclick={this.logOut()}>Log out
          <i className="material-icons right">exit_to_app</i></a></li>
      </ul>
    );
  }
}

export default NavbarProfile;
