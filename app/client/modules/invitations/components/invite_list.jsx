import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import SendInvitationModal from '../components/send_invitation_modal.jsx';
import Invitee from '../containers/invitee';
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
    const tabs = [{content: '#open-invitations', label: 'Open', active: true}, {
      content: '#closed-invitations',
      label: 'Closed',
      active: false
    }];
    return (
      <section id="inviteList">
        <PageTitle title="Invitations"/>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a href="#pending-invitations">Pending Invites</a></li>
              <li className="tab col s3"><a className="active" href="#accepted-invitations">Accepted</a></li>
            </ul>
          </div>
          <div id="pending-invitations" className="col s12">
            <table>
              <thead>
              <Invitee/>

              </thead>
              <tbody>

              </tbody>
            </table>
          </div>

          <div id="accepted-invitations" className="col s12"></div>
        </div>
        <button onClick={this.callMail.bind(this)}>Send Email</button>
      </section>
    );
  }
}

export default InviteList;
