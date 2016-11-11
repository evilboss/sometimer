import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import SendInvitationModal from '../containers/send_invitation_modal.js';
import Invitee from '../containers/invitee';
import moment from 'moment';

/*TODO: @aaron fix invite list layout*/
class InviteList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  callMail() {
    Meteor.call('invitation.sendMail');

  }

  render() {
    const {pendingInvites, closedInvites} = this.props;
    const tabs = [{content: '#open-invitations', label: 'Open', active: true}, {
      content: '#closed-invitations',
      label: 'Closed',
      active: false
    }];
    const format = 'hh:mm A z';
    return (
      <section id="invite-list">
        <PageTitle title="Invitations"/>
        <div className="row">
          <div className="col s7 no-margin-bottom">
            <ul className="tabs">
              <li className="tab col s3"><a href="#pending-invitations">Pending Invites</a></li>
              <li className="tab col s3"><a className="active" href="#accepted-invitations">Accepted</a></li>
            </ul>
          </div>
          <section id="pending-invitations" className="col s12 white-wrapper">
            <table>
              <thead>
              <tr>
                <td>email</td>
                <td>Name</td>
                <td>Role</td>
                <td>Department</td>
                <td>Designation</td>
                <td>Date Invited</td>
              </tr>
              </thead>
              <tbody>
              {(pendingInvites) ? pendingInvites.map((invite, index)=>(
                <tr key={index}>
                  <td>
                    {invite.email}
                  </td>
                  <td>
                    {invite.firstName} {invite.lastName}
                  </td>
                  <td>
                    {invite.role}
                  </td>
                  <td>
                    {invite.department}
                  </td>
                  <td>
                    {invite.designation}
                  </td>
                  <td>
                    {moment(invite.date).tz('Asia/Manila').format(format)}
                  </td>
                </tr>
              )) : ''}
              </tbody>
            </table>
          </section>
          <section id="accepted-invitations" className="col s12 white-wrapper">
            <table>
              <thead>
              <tr>
                <td>email</td>
                <td>Name</td>
                <td>Role</td>
                <td>Department</td>
                <td>Designation</td>
                <td>Date Invited</td>
              </tr>
              </thead>
              <tbody>
              {(closedInvites) ? closedInvites.map((invite, index)=>(
                <tr>
                  <td>
                    {invite.email}
                  </td>
                  <td>
                    {invite.firstName} {invite.lastName}
                  </td>
                  <td>
                    {invite.role}
                  </td>
                  <td>
                    {invite.department}
                  </td>
                  <td>
                    {invite.designation}
                  </td>
                  <td>
                    {console.log(invite.date)}
                  </td>
                </tr>
              )) : ''}
              </tbody>
            </table>
          </section>
        </div>

        <SendInvitationModal/>
      </section>
    );
  }
}

export default InviteList;
