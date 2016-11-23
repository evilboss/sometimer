/**
 * Created by jr on 9/26/16.
 */
import {Invitations, Team} from '/lib/collections';
import {remotivMailer} from '/server/methods/email/email';

const add = (newUser)=> {
  console.log('add');
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
const remove = (userId)=> {
  Meteor.users.remove(userId)
};
const postAdd = (invite, teamId)=> {
  remotivMailer.sendInvite(invite);
  let team = (teamId) ? Team.findOne(teamId) : null;
  (team) ? addToTeam(teamId, team.members, invite.userId) : null;
};
const addToTeam = (teamId, teamMembers, userId)=> {
  teamMembers.push(userId);
  Team.update(teamId, {$set: {members: teamMembers}})
};
const addNew = (user, message)=> {
  console.log('adding new');
  const userId = Accounts.createUser({
    email: user.email,
    profile: user.profile
  });
  const invite = {
    token: Random.hexString(16),
    date: ( new Date() ).toISOString(),
    activationStatus: 'pending',
    inviter: Meteor.userId(),
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    site: user.profile.site,
    position: user.profile.position,
    email: user.email,
    userId: userId,
    message: message
  };
  Invitations.insert(invite);
  (userId) ? postAdd(invite, ( user.profile.department) ? user.profile.department : null) : null;
};
const updatePhoto = (id, imgPath)=> {
  Meteor.users.update({_id: id}, {$set: {'profile.displayPhoto': imgPath}})
};
const update = (id, key, value)=> {
  Meteor.users.update({_id: id}, {$set: {[key]: value}})
};

const remotivUser = {
  add: (newUser)=>add(newUser),
  remove: (userId)=>remove(userId),
  updatePhoto: updatePhoto(),
  update: (id, key, value)=>update(id, key, value),
  addNew: (user, message)=>addNew(user, message),
};
export {remotivUser};