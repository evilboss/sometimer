import React from 'react';

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
    const {firstName, lastName, department, jobTitle}= (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <form>
        <div className="input-field col s12">

          <input id="firstName" ref="firstName" type="text" className="validate"
                 defaultValue={(firstName)?firstName:''}/>
          <label htmlFor="firstName" className={(firstName) ?'active':''}>First Name</label>
        </div>
        <div className="input-field col s12">
          <input id="lastName" ref="lastName" type="text" className="validate"
                 defaultValue={(lastName) ? lastName : ''}
          />
          <label htmlFor="lastName" className={(lastName) ?'active':''}>Last Name</label>
        </div>
        <div className="input-field col s12">
          <input id="department" ref="department" type="text" className="validate"
                 defaultValue={(department) ? department : ''}/>
          <label htmlFor="department" className={(department) ?'active':''}>Department</label>
        </div>
        <div className="input-field col s12">
          <input id="position" ref="position" type="text" className="validate"
                 defaultValue={(jobTitle) ? jobTitle : ''}/>
          <label htmlFor="position" className={(jobTitle) ?'active':''}>Position</label>
        </div>

        <div className="right save">
          <button className="btn theme-color" type="button" onClick={this._update.bind(this)}>Update</button>
        </div>
      </form>
    );
  }
}

export default StaffProfileForm;
