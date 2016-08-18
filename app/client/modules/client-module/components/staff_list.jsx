import React from 'react';
import SendInvitationModal from '/client/modules/invitations/components/send_invitation_modal';

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.staffList);
  }

  render() {
    return (
      <div>
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
          <div id="invitationButton">
            <SendInvitationModal/>
          </div>
        </section>
      </div>
    );
  }
}

export default StaffList;
