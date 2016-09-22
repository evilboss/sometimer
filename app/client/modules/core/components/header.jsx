import React from 'react';
import Navbar from './navbar.jsx';
import HeaderMenu from './header_menu';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <HeaderMenu currentUser={currentUser}/>
        <Navbar menu={this.props.menu}/>
      </div>
    );
  }
}

export default Header;


