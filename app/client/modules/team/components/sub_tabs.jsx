import React from 'react';
import {control} from '/lib/access-control/control';
class SubTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {target, text, permission, userPermissions} = this.props;
    return (
      <section id="sub-tabs" className="twbs">
        {
          (userPermissions) ? control.isPermitted(permission, userPermissions) ?
            <div className="btn btn-add">
              <a href={(target)?target:''} className="waves-effect waves-light secondary-color">
                <i className="material-icons">add</i>
                <span>{(text) ? text : ''}</span>
              </a>
            </div>
            : '' : ''
        }
      </section>
    );
  }
}

export default SubTabs;
