/**
 * Created by jr on 5/20/16.
 */

export default {
  status_change: function () {
    console.info('status change');
  },
  updateStaff({Meteor}, userId, key, value) {
    Meteor.call('users.update', userId, key, value);
  }
}
