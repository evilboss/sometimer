import {sweetPrompts} from "/client/utils/helpers/sweet-helper";
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

export default {
  create({Meteor, LocalState}, user, message) {
    LocalState.set('CREATE_USER_ERROR', null);
    if (!user) {
      LocalState.set('CREATE_USER_ERROR', 'USER is required.');
      return;
    }
    Meteor.call('users.add', user, message, (user, err) => {
      (Meteor.users.find({"emails.address": user.email}).fetch())
        ? sweetPrompts.sweetSucces('<div><a href="/login"><b>Please log in as existing user</b></a> or use a new email address for new account.</div>', 'Email address already exists.', 'error'
      )
        :
        '';
      (err) ? LocalState.set('CREATE_USER_ERROR', `user creating failed: ${err.message}`)
        : '';
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER_ERROR', null);
  }
}
