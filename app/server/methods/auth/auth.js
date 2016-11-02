/**
 * Created by jr on 10/7/16.
 */
const canManage = (userId)=> {
  const selectedUser = Meteor.users.findOne({_id: userId});
  return (selectedUser) ? (selectedUser.profile) ? (selectedUser.profile.role) ? (selectedUser.profile.role == 'admin' || selectedUser.profile.role == 'super-admin' || selectedUser.profile.role == 'manager') : false : false : false;
};
const isAdmin = (userId)=> {
  const selectedUser = Meteor.users.findOne({_id: userId});
  return (selectedUser) ? (selectedUser.profile) ? (selectedUser.profile.role) ? (selectedUser.profile.role == 'admin' || selectedUser.profile.role == 'super-admin') : false : false : false;
};
const isSuperAdmin = (userId)=> {
  const selectedUser = Meteor.users.findOne({_id: userId});
  return (selectedUser) ? (selectedUser.profile) ? (selectedUser.profile.role) ? (selectedUser.profile.role == 'super-admin') : false : false : false;
};
const auth = {
  canManage: (userId)=>canManage(userId),
  isAdmin: (userId)=>isAdmin(userId),
  isSuperAdmin: (userId)=>isSuperAdmin(userId),
};
export {auth};