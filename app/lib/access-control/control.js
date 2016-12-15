/**
 * Created by jr on 6/2/16.
 */
/**
 *
 * @param permission : The permision required
 * @param userPermissions : List of permissions
 */
const isPermitted = (permission, userPermissions) => {
  return (permission) ?
    (userPermissions) ?
      _.contains(userPermissions, permission)
      : console.error('user permissions required')
    : console.error('User permissions required');
};

const isAdmin = (userId) => {
  const selectedUser = Meteor.users.findOne({_id: userId});
  return (selectedUser) ? (selectedUser.profile) ? (selectedUser.profile.role) ? (selectedUser.profile.role == 'admin' || selectedUser.profile.role == 'super-admin') : false : false : false;
};
const isStaff = (userId) => {
  const selectedUser = Meteor.users.findOne({_id: userId});
  return (selectedUser) ? (selectedUser.profile) ? (selectedUser.profile.role) ? (selectedUser.profile.role == 'staff') : false : false : false;
}
const control = {
  isPermitted: (permission, userPermissions) => isPermitted(permission, userPermissions),
  isAdmin: (userId) => isAdmin(userId),
  isStaff: (userId) => isStaff(userId)
};
export {
  control
}