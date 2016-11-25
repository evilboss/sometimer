import React from 'react';

class PermissionCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {changePermissions, isChecked, type} = this.props;
    return (
      <input type="checkbox" id={type}
             data-permission={type} defaultChecked={isChecked}
             onChange={changePermissions.bind(this)}/>
    );
  }
}

export default PermissionCheckbox;
