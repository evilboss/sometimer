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
};
const remotivUser = {
  add: (newUser)=>add(newUser)
}
export {remotivUser};