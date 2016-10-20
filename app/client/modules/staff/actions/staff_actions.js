export default {
  profileUpdate({Meteor, LocalState}, userId, profile) {

    console.log(profile);
    Meteor.call('users.update.profile', userId, profile);
  }
}
