import React from 'react';

class NavbarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeLogOut = ()=> {
      sweetAlert({
        title: "Confirm Sign-out?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0a84ad",
        cancelButtonText: "No",
        confirmButtonText: "Yes",
        closeOnConfirm: false,
        closeOnCancel: true,
        allowEscapeKey: true,
        allowOutsideClick: true
      }, function (isConfirm) {
        if (isConfirm) {
          sweetAlert("Sign-out!", ".", "success");
          Meteor.logout();
          FlowRouter.go('/login');
        }
      });

    };
  }


  render() {
    return (
      <ul id='account-menu' className='dropdown-content'>
        <li><a href="/dashboard/profile">Profile
          <i className="material-icons right">account_box</i></a></li>
        <li><a href="" onClick={this.hanldeLogOut}>Sign out
          <i className="material-icons right">exit_to_app</i></a></li>
      </ul>
    );
  }
}

export default NavbarProfile;
