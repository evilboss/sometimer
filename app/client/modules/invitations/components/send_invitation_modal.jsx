import React from 'react';
class SendInvitationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('select').material_select();
      $('.modal-trigger').leanModal();
    });
  }

  closeModal() {
    $('#send-invitation-modal').closeModal();
  }

  render() {
    const teamListing = this.props.team;
    console.log(teamListing);
    return (
      <div>
        <button className="modal-trigger btn theme-color pull-right" data-toggle="modal"
                data-target="send-invitation-modal">Send Invitation
        </button>
        <section name="sendInvitationModal">
          <div id="send-invitation-modal" className="modal">
            <form ref="inviteForm">
              <div className="modal-content">
                <h4 className="modal-title" id="send-invitation">Send Invitation</h4>
                <div className="row modal-body">
                  <div className="form-group col s12">
                    <input ref="email" placeholder="Email Address" type="email" className="form-control"
                           name="emailAddress"/>
                  </div>
                  <div className="form-group col s6">
                    <input ref="firstName" placeholder="First Name" type="text" className="form-control"
                           name="firstName"/>
                  </div>
                  <div className="form-group col s6">
                    <input ref="lastName" placeholder="Last Name" type="text" className="form-control"
                           name="lastName"/>
                  </div>
                  <div className="form-group col s6">
                    <input ref="department" placeholder="Department" type="text" className="form-control"
                           name="department"/>
                  </div>
                  <div className="form-group col s6">
                    <input ref="designation" placeholder="Designation" type="text" className="form-control"
                           name="designation"/>
                  </div>
                  <div className="form-group col s6">
                    <select name="team" ref="team" className="input-field" defaultValue="Choose Team">
                      <option value="" disabled defaultValue="Select Role">Select Team</option>
                      {(teamListing) ?
                        teamListing.map((team, index) => (
                          <option key={index} value={team._id}>{team.name}</option>
                        )) : ''}
                    </select>
                  </div>
                  <div className="form-group col s6">
                    <select name="role" ref="status" className="input-field" defaultValue="Choose Role">
                      <option value="" disabled defaultValue>Select Status</option>
                      <option value="probationary">Probationary</option>
                      <option value="regular">Regular</option>
                    </select>
                  </div>
                  <div className="form-group col s12">
                    <select name="role" ref="role" className="input-field" defaultValue="Choose Role">
                      <option value="" disabled defaultValue="Select Role">Select Role</option>
                      <option value="staff">Staff</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn cancel" onClick={this.closeModal.bind(this)} data-dismiss="modal">
                  Cancel
                </button>
                <button type="button" onClick={this._create.bind(this)} className="btn btn-success">Send Invitation
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }

  _create() {
    const invite = {
      email: this.refs.email.value,
      role: this.refs.role.value,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      department: this.refs.department.value,
      team: this.refs.team.value,
      designation: this.refs.designation.value,
      status: this.refs.status.value
    };
    this.sendInvite(invite);
  }

  sendInvite(invite) {
    let errors = [];
    (invite) ?
      (invite.email) ?
        (invite.firstName) ?
          (invite.lastName) ?
            (invite.department) ?
              (invite.team) ?
                (invite.designation) ?
                  (invite.role) ?
                    (invite.status) ?
                      console.log('this has passed', invite)
                      : errors.push('Status must be specified')
                    : errors.push('A user must have a role')
                  : errors.push('Designation must be specified')
                : errors.push('Team is required')
              : errors.push('Department is required')
            : errors.push('lastName is required')
          : errors.push('firstName is required')
        : errors.push('email is required')
      : errors.push('Invite is required');
    console.log(errors.length);
    if (errors.length == 0) {
      console.log('No errors');
      Meteor.call('invitations.send', invite, (err, res)=> {
        console.log(err, res);
      });
      this.refs.email.value = '';
      this.refs.role.value = '';
      this.refs.firstName.value = '';
      this.refs.lastName.value = '';
      this.refs.department.value = '';
      this.refs.team.value = '';
      this.refs.designation.value = '';
      this.refs.status.value = '';
      this.closeModal;
    }
  }


}
export default SendInvitationModal;