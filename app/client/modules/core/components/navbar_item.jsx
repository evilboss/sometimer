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
        {this.props.menu.map(menu => (<a key={menu._id} href={menu.url}>
            <div className={`menu-item center-align ${FlowHelpers.currentRoute(menu.name)}`}>
              {menu.title}</div>
          </a>
        ))}
      </div>

    );
  }
}

export default NavbarItem;
