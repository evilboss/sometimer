import React from 'react';

class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <a href="/dashboard">
          <div className="menu-item center-align">
            Dashboard
          </div>
        </a>
        {this.props.menu.map(menu => (
          <div className="menu-item center-align" key={menu._id}>
            <a href={menu.url}>{menu.title}</a></div>
        ))}
      </div>

    );
  }
}

export default NavbarItem;
