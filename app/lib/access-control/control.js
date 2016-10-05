/**
 * Created by jr on 6/2/16.
 */
/**
 *
 * @param permission : The permision required
 * @param userPermissions : List of permissions
 */
const hasAccess = (permission, userPermissions)=> {
  return (permission) ?
    (userPermissions) ?
      _.contains(userPermissions, permission)
      : console.error('user permissions required')
    : console.error('User permissions required');
};
const control = {
  hasAccess: (permission, userPermissions)=>hasAccess(permission, userPermissions)
};
export {
  control
}