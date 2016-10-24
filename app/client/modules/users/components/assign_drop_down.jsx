import React from 'react';

class AssignDropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let role = this.props.user.profile.role;
    return (
      <div>
        
        {(role =='manager'||role=='admin')?<div className="input-field">
          <select className="icons">
            <option value="" disabled selected>assign to</option>
            <option value="">AaronR</option>
          </select>
          <label>Show to-dos assigned to </label>
        </div>:''}
      </div>
    );
  }
}

export default AssignDropDown;
