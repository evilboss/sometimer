import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import SendInvitationModal from '../components/send_invitation_modal.jsx';
import Invitee from '../containers/invitee';

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
    const tabs = [{content: '#open-invitations', label: 'Open', active: true}, {
      content: '#closed-invitations',
      label: 'Closed',
      active: false
    }];
    return (
      <section id="invite-list">
        <PageTitle title="Invitations"/>
        <div className="row no-section-margin">
          <div className="col s7">
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
                <td>first name</td>
                <td>last name</td>
                <td>role</td>
              </tr>
              <tr>
                <td>one</td>
                <td>one</td>
                <td>one</td>
                <td>one</td>
                <td>one</td>

              </tr>
              </thead>
              <tbody>
              <Invitee/>
              </tbody>
            </table>
          </section>

          <section id="accepted-invitations" className="col s12"></section>
        </div>
        <SendInvitationModal/>
      </section>
    );
  }
}

export default InviteList;
