export default {
  create({Meteor, LocalState}, user) {
    LocalState.set('CREATE_USER_ERROR', null);
    if (!user) {
      LocalState.set('CREATE_USER_ERROR', 'USER is required.');
      return;
    }
    console.log(user);
    Meteor.call('users.add', user, (err) => {
      (err) ? LocalState.set('CREATE_USER_ERROR', `user creating failed: ${err.message}`) : '';
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER_ERROR', null);
  }
}
