import React from 'react';
import NavbarItem from './navbar_item';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <section id="navbar">
        <nav id="horizontal-nav">
          <div className="nav-wrapper">

            <NavbarItem menu={this.props.menu} role={this.props.role} userPermissions={this.props.userPermissions}/>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
