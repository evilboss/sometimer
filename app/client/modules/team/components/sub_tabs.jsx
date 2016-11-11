import React from 'react';
import {control} from '/lib/access-control/control';
class SubTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {target, text, permission, userPermissions} = this.props;
    return (
      <section id="sub-tabs">
        {
          (userPermissions) ? control.isPermitted(permission, userPermissions) ?
            <div className="btn-add">
              <a href={(target)?target:''} className="waves-effect waves-light secondary-color">
                <span>{(text) ? text : ''}</span>
                <i className="material-icons">add</i></a>
            </div>
            : '' : ''
        }
      </section>
    );
  }
}

export default SubTabs;
