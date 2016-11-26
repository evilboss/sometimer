import React from 'react';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMenu(menu) {
    return (
      <a key={menu._id}
         href={(_.contains(['dashboard', 'dashboard.workflow', 'dashboard.toolbox'], menu.name)) ? '' : menu.url}
         className={`menu-item center-align ${FlowHelpers.currentRoutes(menu.routes)}`}
         onClick={(_.contains(['dashboard', 'dashboard.workflow', 'dashboard.toolbox'], menu.name)) ? sweetPrompts.sweetOkPrompt.bind(this, 'Coming Soon!') : ''}>
        <div>{menu.title}</div>
      </a>
    )
  }

  render() {
    let {menu, role, userPermissions} = this.props;
    return (
      <div>
        {menu.map(menu => (
          (_.contains(menu.roles, role)) ?
            (menu.permission) ? (_.contains(userPermissions, menu.permission)) ?
              this.renderMenu(menu)
              : null
              : this.renderMenu(menu)
            : null
        ))}
      </div>
    );
  }
}

export default NavbarItem;
