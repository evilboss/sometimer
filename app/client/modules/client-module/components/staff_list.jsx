import React from 'react';

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.staffList);
  }

  render() {
    return (
      <section id="staff-list">
        <h5>Staff List</h5>
        <ul className="collection">
          {this.props.staffList.map((staff, index) => (
            <li className="collection-item avatar" key={index}>
              <img src={"/uploads/" + staff.profile.displayPhoto} alt="" className="circle"/>
              <span className="title">{staff.profile.firstName} {staff.profile.lastName}</span>
              <p>{staff.profile.jobTitle}<br/>
                {staff.profile.department}<br/>
                {staff.profile.role}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default StaffList;
