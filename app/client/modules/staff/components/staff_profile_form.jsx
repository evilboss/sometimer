import React from 'react';
import CancelBtn from '/client/utils/buttons/cancel_btn';

class StaffProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: null,
    }
  }

  _update() {
    const {profileUpdate, user} = this.props;
    const {firstName, lastName, department, position}= this.refs;
    const profile = {
      firstName: firstName.value,
      lastName: lastName.value,
      department: department.value,
      position: position.value,
    };

    profileUpdate(user._id, profile);
  }

  render() {
    const {user} = this.props;
    const {firstName, lastName, department, jobTitle, role}= (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <form className="twbs">
        <div className="class-info">
          PERSONAL INFORMATION
        </div>
        <div className="col s6 no-padding">
          <div className="input-field">
            <input id="firstName" ref="firstName" type="text" className="validate"
                   defaultValue={(firstName) ? firstName : ''}/>
            <label htmlFor="firstName" className={(firstName) ? 'active required' : ''}>First Name</label>
          </div>
        </div>
        <div className="col s6">
          <div className="input-field">
            <input id="lastName" ref="lastName" type="text" className="validate"
                   defaultValue={(lastName) ? lastName : ''}
            />
            <label htmlFor="lastName" className={(lastName) ? 'active required' : ''}>Last Name</label>
          </div>
        </div>

        <div className="class-info">
          WORK INFO
        </div>
        <div className=" col s6 no-padding">
          <div className="input-field">
            <input id="position" placeholder="Position" ref="position" type="text"
                   defaultValue={(jobTitle) ? jobTitle : ''} className="validate"/>
            <label htmlFor="position" className="active required">Position</label>
          </div>
        </div>


        <div className=" col s6">
          {(role == 'client') ? 'client' : 'staff'
          }
          <div className="input-field">
            <input id="department" ref="department" type="text" className="validate"
                   defaultValue={(department) ? department : ''}/>
            <label htmlFor="department" className={(department) ? 'active required' : ''}>Department</label>
          </div>
        </div>
        <div className="right save">
          <button className="btn theme-color" type="button" onClick={this._update.bind(this)}>Update</button>
          <CancelBtn route="/dashboard/team/"/>
        </div>
      </form>
    );
  }
}

export default StaffProfileForm;
