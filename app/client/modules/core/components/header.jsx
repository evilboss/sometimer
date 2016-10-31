import React from 'react';
import Navbar from './navbar.jsx';
import HeaderMenu from './header_menu';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {currentUser, sitePhoto} = this.props;
    return (
      <div>
        <HeaderMenu sitePhoto={sitePhoto} currentUser={currentUser}/>
        <Navbar menu={this.props.menu}/>
      </div>
    );
  }
}

export default Header;


