import React from 'react';
import NavbarProfile from '../../core/components/navbar_profile';
import HeaderMenu from '/client/modules/core/components/header_menu';

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
      <div id="dashboardHeader">
        <HeaderMenu currentUser={currentUser}/>
      </div>


    );
  }
}

export default DashboardHeader;
