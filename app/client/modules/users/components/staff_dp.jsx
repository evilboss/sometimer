import React from 'react';

class StaffDp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const displayPhoto = this.props.displayPhoto;
    return (
      <img
        src={(displayPhoto)?`/uploads/${displayPhoto}`:'http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'}
        alt="people" className="circle responsive-img"/>
    );
  }
}

export default StaffDp;
