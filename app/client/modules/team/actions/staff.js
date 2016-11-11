export default {
  create({Meteor, LocalState}, user, message) {
    LocalState.set('CREATE_USER_ERROR', null);
    if (!user) {
      LocalState.set('CREATE_USER_ERROR', 'USER is required.');
      return;
    }
    Meteor.call('users.add', user, message, (err) => {
      (err) ? LocalState.set('CREATE_USER_ERROR', `user creating failed: ${err.message}`) : '';
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER_ERROR', null);
  }
}
