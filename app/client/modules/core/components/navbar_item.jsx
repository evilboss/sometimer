import React from 'react';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {menu, currentUser} = this.props;
    return (

      <div>
        <a href="/dashboard">
          <div className="menu-item center-align ">
            DASHBOARD
          </div>
        </a>
        {menu.map(menu => (<a key={menu._id} href={menu.url}>
            <div className={`menu-item center-align ${FlowHelpers.currentRoute(menu.name)}`}
                 onClick={(menu.title =='WORK FLOW'||menu.title =='TOOLBOX')? sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!'):''}>
              {menu.title}</div>
          </a>
        ))}
      </div>

    );
  }
}

export default NavbarItem;
