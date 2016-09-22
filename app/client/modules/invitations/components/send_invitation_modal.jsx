import React from 'react';
class SendInvitationModal extends React.Component {
  constructor(props) {
    super(props);
    this.sendInvite = this.sendInvite.bind(this);
  }
  componentDidMount() {
    $('.modal-trigger').leanModal();
    $('select').material_select();
  }
  sendInvite(e) {
    e.preventDefault();
    const invite = {
      email: this.refs.email.value,
      role: this.refs.role.value
    };
    Meteor.call('invitations.send', invite, (error, response) => {
      (error) ? alert(error.reason) : alert('Invitation Sent!');
    });
  }
  render() {
    return (
      <div>
        <button className="modal-trigger btn theme-color pull-right" data-toggle="modal"
                data-target="send-invitation-modal">Send Invitation
        </button>
        <section name="sendInvitationModal">
          <div id="send-invitation-modal" className="modal">
            <form onSubmit={ this.sendInvite } ref="inviteForm">
              <div className="modal-content">
                <h4 className="modal-title" id="send-invitation">Send Invitation</h4>
                <div className="modal-body">
                  <div className="form-group">
                    <input ref="email" placeholder="Email Address" type="email" className="form-control"
                           name="emailAddress"/>
                  </div>
                  <div className="form-group">
                    <select name="role" ref="role" className="input-field col s12" defaultValue="Choose Role">
                      <option value="staff">Staff</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-success">Send Invitation</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
export default SendInvitationModal;