import React from 'react';

class StaffProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: null,
    }
  }
  
  render() {
    const user = this.props.user;
    const {firstName, lastName, department, jobTitle}= (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <form>
        <div className="input-field col s12">

          <input id="firstName" ref="firstName" type="text" className="validate"
                 defaultValue={(firstName)?firstName:''}/>
          <label htmlFor="firstName" className={(firstName) ?'active':''}>First Name</label>
        </div>
        <div className="input-field col s12">
          <input id="lastName" ref="LastName" type="text" className="validate"
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
          <button className="btn theme-color" type="submit">Update</button>
        </div>
      </form>
    );
  }
}

export default StaffProfileForm;
