import React from 'react';

class StaffDp extends React.Component {
  constructor(props) {
    super(props);
  }

  _hasPermission() {
    const {target} = this.props;
    (target) ? '' : swal(
      'Oops...',
      'You are not Permitted to do that!',
      'error'
    );
  }

  render() {
    const {displayPhoto, displayAPhoto, target} = this.props;
    return (
      <a href={(target)?target:''} onclick={this._hasPermission.bind(this)}>
        <img src={(displayPhoto)?`${displayPhoto}`:'/uploads/defaults/default_user.png'} alt="people"
             className={`circle responsive-img ${(displayAPhoto)?'hide':''}`}/>
      </a>
    );
  }
}
export default StaffDp;
