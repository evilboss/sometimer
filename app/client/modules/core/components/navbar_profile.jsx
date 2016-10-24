import React from 'react';

class NavbarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeLogOut = ()=> {
      sweetAlert({
        title: "Confirm Log-out?",
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
          sweetAlert("Log-out!", ".", "success");
          Meteor.logout();
          FlowRouter.go('/login');
        }
      });

    };
  }


  render() {
    return (
      <ul id='account-menu' className='dropdown-content'>
        <li><a href="" onClick={this.hanldeLogOut}>Log out
          <i className="material-icons right">exit_to_app</i></a></li>
      </ul>
    );
  }
}

export default NavbarProfile;
