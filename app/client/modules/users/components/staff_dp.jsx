import React from 'react';

class StaffDp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const displayPhoto = this.props.displayPhoto;
    return (
      <img
        src={(displayPhoto)?`${displayPhoto}`:'/uploads/defaults/default_user.png'}
        alt="people" className="circle responsive-img"/>
    );
  }
}
export default StaffDp;
