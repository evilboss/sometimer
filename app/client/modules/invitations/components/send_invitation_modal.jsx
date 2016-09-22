import React from 'react';
class SendInvitationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.modal-trigger').leanModal();
    $('select').material_select();
  }


  render() {
    console.log(this.props);
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
                <div className="modal-body">
                  <div className="form-group">
                    <input ref="email" placeholder="Email Address" type="email" className="form-control"
                           name="emailAddress"/>
                  </div>
                  <div className="form-group">
                    <input ref="firstName" placeholder="First Name" type="text" className="form-control"
                           name="firstName"/>
                  </div>
                  <div className="form-group">
                    <input ref="lastName" placeholder="Last Name" type="text" className="form-control"
                           name="lastName"/>
                  </div>
                  <div className="form-group">
                    <input ref="department" placeholder="Department" type="text" className="form-control"
                           name="department"/>
                  </div>
                  <div className="form-group">
                    <input ref="designation" placeholder="Designation" type="text" className="form-control"
                           name="designation"/>
                  </div>
                  <div className="form-group">
                    <select name="role" ref="status" className="input-field col s12" defaultValue="Choose Role">
                      <option value="" disabled selected>Select Status</option>
                      <option value="probationary">Probationary</option>
                      <option value="regular">Regular</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="role" ref="role" className="input-field col s12" defaultValue="Choose Role">
                      <option value="" disabled selected>Select Role</option>
                      <option value="staff">Staff</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
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
    const {create} = this.props;
    const invite = {
      email: this.refs.email.value,
      role: this.refs.role.value,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      department: this.refs.department.value,
      designation: this.refs.designation.value,
      status: this.refs.status.value,
    };
    create(invite);
  }
}
export default SendInvitationModal;