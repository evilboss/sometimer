import React from 'react';

class NavbarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeLogOut = ()=> {
      Meteor.logout();
      FlowRouter.go('/login');
    };
  }


  render() {
    return (
      <ul id='account-menu' className='dropdown-content'>
        <li><a href="/dashboard/profile">My Account
          <i className="material-icons right">account_box</i></a></li>
        <li className="divider"></li>
        <li><a href="" onClick={this.hanldeLogOut}>Log out
          <i className="material-icons right">exit_to_app</i></a></li>
      </ul>
    );
  }
}

export default NavbarProfile;
