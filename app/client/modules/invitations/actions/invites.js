export default {
  create({Meteor, LocalState}, invite) {
    if (!invite.email) {
      LocalState.set('CREATE_INVITE_ERROR', 'Email is a required field.');
      return;
    }
    if (!invite.status) {
      LocalState.set('CREATE_INVITE_ERROR', 'Status is a required field');
      return;
    }
    if (!invite.status) {
      LocalState.set('CREATE_INVITE_ERROR', 'Status is a required field');
      return;
    }
    console.log(invite);

    /*Meteor.call('invitations.send', invite, (error, response) => {
      (error) ? alert(error.reason) : alert('Invitation Sent!');
    });*/
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_INVITE_ERROR', null);
  }
}
