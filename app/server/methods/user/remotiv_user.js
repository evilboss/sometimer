/**
 * Created by jr on 9/26/16.
 */
import {Invitations} from '/lib/collections';
const add = (newUser)=> {
  const updateInvite = ()=> {
    const inviteToUpdate = Invitations.findOne(newUser.inviteId);
    Invitations.update({_id: newUser.inviteId}, {$set: {status: 'completed', token: ''}});
  }
  const addAccount = Accounts.createUser({
    email: newUser.email,
    password: newUser.password,
    profile: newUser.profile
  });
  console.log(addAccount);
  (addAccount) ? updateInvite() : '';
  return addAccount;
};
const addNew = (newUser)=> {
  Accounts.createUser({
    email: newUser.email,
    profile: newUser.profile
  });
};
const updatePhoto = (id, imgPath)=> {
  Meteor.users.update({_id: id}, {$set: {'profile.displayPhoto': imgPath}})
};
const update = (id, key, value)=> {
  Meteor.users.update({_id: id}, {$set: {[key]: value}})
}
const remotivUser = {
  add: (newUser)=>add(newUser),
  updatePhoto: updatePhoto(),
  update: (id, key, value)=>update(id, key, value),
  addNew: (newUser)=>addNew(addNew),
}
export {remotivUser};