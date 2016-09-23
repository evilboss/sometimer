import {Invitations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {remotivMailer} from './email/email';
export default function () {
  Meteor.methods({
    'invitations.send'(invite) {
      check(invite, {
        email: String,
        role: String,
        firstName: String,
        lastName: String,
        department: String,
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
    }
  });
}
