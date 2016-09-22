export default {
  make({Meteor, LocalState}, invite) {
    LocalState.set('CREATE_INVITE_ERROR', null);
    console.log(invite);
    /*Meteor.call('invitations.send', invite, (error, response) => {
     (error) ? alert(error.reason) : alert('Invitation Sent!');
     });*/
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_INVITE_ERROR', null);
  }
}
