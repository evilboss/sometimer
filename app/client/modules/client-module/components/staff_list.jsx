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
        <div className="collection">
          {this.props.staffList.map((staff, index) => (
            <a className="collection-item avatar" key={index} href={`/dashboard/staff/${staff._id}`}>
              <img src={"/uploads/" + staff.profile.displayPhoto} alt="" className="circle"/>
              <span className="title">{staff.profile.firstName} {staff.profile.lastName}</span>
              <p>{staff.profile.jobTitle}<br/>
                {staff.profile.department}<br/>
                {staff.profile.role}
              </p>
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default StaffList;
