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
const hasPermission = (userId, permission)=> {
  const selector = {_id: userId, 'profile.permissions': {$all: [permission]}};
  const selectedUser = Meteor.users.findOne(selector);
  return (selectedUser) ? true : false;
};
const isManager = (userId)=> {
  const selector = {_id: userId, 'profile.role': 'manager'};
  const selectedUser = Meteor.users.findOne(selector);
  return (selectedUser) ? true : false;
};
const auth = {
  canManage: (userId)=>canManage(userId),
  isAdmin: (userId)=>isAdmin(userId),
  isSuperAdmin: (userId)=>isSuperAdmin(userId),
  isManager: (userId)=>isManager(userId),
  hasPermission: (userId, permission)=>hasPermission(userId, permission)
};
export {auth};