import {Invitations, Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {remotivMailer} from './email/email';
import {remotivUser} from './user/remotiv_user';

export default function () {
  Meteor.methods({
    'invitations.send'(invite) {
      check(invite, {
        email: String,
        role: String,
        firstName: String,
        lastName: String,
        department: String,
        team: String,
        designation: String,
        status: String,
      });
      invite.token = Random.hexString(16);
      invite.date = ( new Date() ).toISOString();
      invite.activationStatus = 'pending';
      invite.inviter = Meteor.userId();
      const invitationId = Invitations.insert(invite);
      invite._id = invitationId;
      remotivMailer.sendInvite(invite);
    },
    'invitation.sendMail'(){
      console.log('sending mail');
      const message = {
        to: 'Aaron Randrup <aaron@bosstechlabs.com>',
        subject: 'Invitation Email',
        template: 'invitation',
        replyTo: 'Remotiv Notifications <notifications@remotiv.com>',
        data: {token: 'Test'},
        attachments: []
      }
      //Mailer.send(message);
    },
    'invitation.activate'(invite){
      console.log(invite.token);
      ;
      console.log(invite);
      const inviteToActivate = Invitations.findOne({token: invite.token});
      console.log(inviteToActivate);
      const throwError = ()=> {
        throw new Meteor.Error(500, 'Error 500: Not found', 'the Invite is not found');
        return 'error';
      };
      const addToTeam = (userId, inviteToAdd)=> {
        const selectedTeam = Team.findOne({_id: inviteToAdd.team});
        const members = (selectedTeam.members) ? selectedTeam.members : [];
        members.push(userId);
        Team.update({_id: inviteToAdd.team}, {$set: {members: _.unique(members)}});
      };
      const constructUser = (inviteToAdd)=> {
        Accounts.setPassword(inviteToAdd.userId, invite.password);
        remotivUser.update(inviteToAdd.userId, 'profile.status', 'completed');
        const addedUser = Accounts.findUserByEmail(inviteToAdd.email);
      };
      (inviteToActivate) ? constructUser(inviteToActivate) : throwError();
      return inviteToActivate;
    }
  });
}
