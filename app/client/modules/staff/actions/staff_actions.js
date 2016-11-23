import {sweetPrompts} from '/client/utils/helpers/sweet-helper';

export default {
  profileUpdate({Meteor, LocalState}, userId, profile) {
    Meteor.call('users.update.profile', userId, profile);
    sweetPrompts.sweetSucces('Staff Updated', 'Click OK To continue', 'success');
  },
  removeStaff({Meteor, LocalState}, userId) {
    console.log(userId, 'eto ka');
    Meteor.call('users.remove', userId)
    sweetPrompts.sweetSucces('Staff Deleted', 'Click OK To continue', 'success', '/dashboard/team');
  },
}
