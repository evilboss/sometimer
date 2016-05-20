/**
 * Created by jr on 5/19/16.
 */
const accessControl = {
  test: function () {
    return 'aw'
  },
  status: '',
  isLoggedIn: () => {
    console.log('triggering');
    return (Meteor.userId()) ? true : false
  }
}
export {
  accessControl
}