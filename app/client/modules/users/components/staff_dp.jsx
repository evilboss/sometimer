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
    const {displayPhoto, target, className, position, delay, displayName} = this.props;
    return (
      <a href={(target) ? target : ''}
         className={(className) ? className : ''}
         data-position={(position) ? position : ''}
         data-delay={(delay) ? delay : ''}
         data-tooltip={(displayName) ? displayName : ''}
         onClick={this._hasPermission.bind(this)}>
        <img src={(displayPhoto) ? `${displayPhoto}` : '/uploads/defaults/default_user.png'} alt="people"
             className={`circle responsive-img`}/>
      </a>
    );
  }
}
export default StaffDp;
