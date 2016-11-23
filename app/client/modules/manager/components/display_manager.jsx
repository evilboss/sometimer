import React from 'react';

class DisplayManager extends React.Component {
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
    let {teamLeader, target} = this.props;
    return (
      <div>
        <a href={(target)?target:''} onClick={this._hasPermission.bind(this)}>
          <img
            src={`${(teamLeader.displayPhoto)?teamLeader.displayPhoto:'/uploads/defaults/default_user.png'}`}
            alt="Team Lead" className="circle responsive-img dp-small left"/>
          <div className="col s8 staff-details no-margin">
            <h6>{teamLeader.firstName} {teamLeader.lastName}<br/>
              <small>{teamLeader.jobTitle}</small>
            </h6>
          </div>
        </a>
      </div>
    );
  }
}

export default DisplayManager;
