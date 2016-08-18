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
    return (
      <div>
        <button className="modal-trigger btn btn-success pull-right" data-toggle="modal"
                data-target="send-invitation-modal">Send Invitation
        </button>

        <section name="sendInvitationModal">

          <div id="send-invitation-modal" className="modal">
            <div className="modal-content">
              <h4 className="modal-title" id="send-invitation">Send Invitation</h4>
              <form id="send-invite-form">
                <div className="modal-body">
                  <div className="form-group">
                    <input placeholder="Email Address" type="email" className="form-control" name="emailAddress"/>
                  </div>
                  <div className="form-group">
                    <select  name="roles" className="input-field col s12">
                      <option value="" disabled selected>Choose Role</option>
                      <option value="employee">Employee</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                    <select>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>


                  </div>
                </div>
                <div className="modal-footer">
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-success">Send Invitation</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SendInvitationModal;
