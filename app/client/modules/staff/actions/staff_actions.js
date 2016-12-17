import {sweetPrompts} from "/client/utils/helpers/sweet-helper";

export default {
  profileUpdate({Meteor, LocalState}, userId, profile) {
    Meteor.call('users.update.profile', userId, profile);
    sweetPrompts.sweetSucces('Updated', 'Click OK To continue', 'success', '/dashboard/profile');
  },
  removeStaff({Meteor, LocalState}, userId) {
    Meteor.call('users.remove', userId)
    sweetPrompts.sweetSucces('User Deleted', 'Click OK To continue', 'success', '/dashboard/team');
  },
  updatePermissions({Meteor, LocalState}, userId, permissions) {
    Meteor.call('users.update.permissions', userId, permissions);
    sweetPrompts.sweetSucces('Permissions Updated', 'Click OK To continue', 'success');
  },

}
