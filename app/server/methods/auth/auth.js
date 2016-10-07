/**
 * Created by jr on 10/7/16.
 */

const isAdmin = (userId)=> {
  const selectedUser = Meteor.users.findOne({_id: userId});
  return (selectedUser) ? (selectedUser.profile) ? (selectedUser.profile.role) ? (selectedUser.profile.role == 'admin') : false : false : false;
};
const auth = {
  isAdmin: (userId)=>isAdmin(userId)
};
export {auth};