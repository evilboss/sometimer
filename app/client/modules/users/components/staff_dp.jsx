import React from 'react';

class StaffDp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {displayPhoto, displayAPhoto, target} = this.props;
    return (
      <a href={(target)?target:''}>
        <img src={(displayPhoto)?`${displayPhoto}`:'/uploads/defaults/default_user.png'} alt="people"
             className={`circle responsive-img ${(displayAPhoto)?'hide':''}`}/>
      </a>
    );
  }
}
export default StaffDp;
