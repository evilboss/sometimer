import React from 'react';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMenu(menu) {
    return (<a key={menu._id} href={menu.url}>
        <div className={`menu-item center-align ${FlowHelpers.currentRoute(menu.name)}`}
             onClick={(menu.title =='WORK FLOW'||menu.title =='TOOLBOX')? sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!'):''}>
          {menu.title}</div>
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
