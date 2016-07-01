/**
 * Created by jr on 5/19/16.
 */
import control from './control';
const accessControl = {
  test: function () {
    return 'aw'
  },
  status: '',
  isLoggedIn: (routename, redirect) => {
    const currentUser = Meteor.userId();
    if (!currentUser) {
      redirect('/login');
    }
  },
  redirectLogin: function (routename) {

  },
  cannotAccess: function () {

  },
  is_allowed: function () {

  }
}
export {
  accessControl
}