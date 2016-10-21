/**
 * Created by jr on 9/26/16.
 */
import {Invitations} from '/lib/collections';
import {remotivMailer} from '/server/methods/email/email';
const add = (newUser)=> {
  const updateInvite = ()=> {
    const inviteToUpdate = Invitations.findOne(newUser.inviteId);
    Invitations.update({_id: newUser.inviteId}, {$set: {status: 'completed', token: ''}});
  };
  const addAccount = Accounts.createUser({
    email: newUser.email,
    password: newUser.password,
    profile: newUser.profile
  });
  (addAccount) ? updateInvite() : '';
  return addAccount;
};
const addNew = (user)=> {
  console.log(user);
  const userId = Accounts.createUser({
    email: user.email,
    profile: user.profile
  });
  console.log(userId);
  const invite = {
    token: Random.hexString(16),
    date: ( new Date() ).toISOString(),
    activationStatus: 'pending',
    inviter: Meteor.userId(),
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    email: user.email,
    userId: userId
  };
  Invitations.insert(invite);
  (userId) ? remotivMailer.sendInvite(invite) : '';
};
const updatePhoto = (id, imgPath)=> {
  Meteor.users.update({_id: id}, {$set: {'profile.displayPhoto': imgPath}})
};
const update = (id, key, value)=> {
  Meteor.users.update({_id: id}, {$set: {[key]: value}})
};
const remotivUser = {
  add: (newUser)=>add(newUser),
  updatePhoto: updatePhoto(),
  update: (id, key, value)=>update(id, key, value),
  addNew: (user)=>addNew(user),
};
export {remotivUser};