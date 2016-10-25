export default {
  profileUpdate({Meteor, LocalState}, userId, profile) {
    Meteor.call('users.update.profile', userId, profile);
  }
}
