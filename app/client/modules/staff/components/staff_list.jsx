import React from 'react';
import moment from 'moment';
import SendInvitationModal from '/client/modules/invitations/components/send_invitation_modal';
import StaffDetails from '../containers/staff_details';
class StaffList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section id="staff-list">
          <h5>Staff List</h5>
          <div className="collection">
            {this.props.staffList.map((staff, index) => (
              <StaffDetails key={index} staff={staff} index={index}/>
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
