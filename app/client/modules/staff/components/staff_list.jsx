import React from 'react';
import moment from 'moment';
import SendInvitationModal from '/client/modules/invitations/components/send_invitation_modal';
import StaffDetails from '../containers/staff_details';
import PageTitle from '/client/modules/core/components/page_title';
class StaffList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  render() {
    return (
      <div>
        <section id="staff-list">
          <PageTitle title="My Team"/>
          <div className="row">
            <div className="col s12">
              <div id="today" className="col s12">Test 1</div>
              <div id="week" className="col s12">Test 2</div>
              <div id="month" className="col s12">Test 3</div>
              <div id="custom" className="col s12">Test 4</div>
            </div>
          </div>
          <div className="tabs-wrapper">
            <ul className="tabs">
              <li className="tab col s3"><a className="active" href="#today">Today</a></li>
              <li className="tab col s3"><a href="#week">This Week</a></li>
              <li className="tab col s3"><a href="#month">This Month</a></li>
              <li className="tab col s3"><a href="#custom">Custom Date</a></li>
            </ul>
          </div>
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
