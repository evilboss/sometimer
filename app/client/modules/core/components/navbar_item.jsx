import React from 'react';
import FlowHelpers from '/client/utils/helpers/route-helpers'
class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <a href="/dashboard">
          <div className="menu-item center-align ">
            Dashboard
          </div>
        </a>
        {this.props.menu.map(menu => (
          <div className={`menu-item center-align ${FlowHelpers.currentRoute(menu.name)}`} key={menu._id}>
            <a href={menu.url}>{menu.title}</a></div>
        ))}
      </div>

    );
  }
}

export default NavbarItem;
