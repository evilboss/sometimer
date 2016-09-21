import {Invitations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {remotivMailer} from './email/email';
export default function () {
  Meteor.methods({
    'invitations.send'(invite) {
      check(invite, {
        email: String,
        role: String
      });
      const sendInvitation = {
        email: invite.email,
        token: Random.hexString(16),
        role: invite.role,
        date: ( new Date() ).toISOString()

      };
      console.info('sending Invite', sendInvitation);
    },
    'invitation.sendMail'(){
      console.log('sending mail');
      const options = {
        from: 'notifications@remotiv.io',
        to: 'aaron@bosstechlabs.com',
        subject: 'Malati ka butu',
        text: '',
        html: '<b>ipasok si dick</b>'

      };
      const message = {
        to: 'Aaron Randrup <aaron@bosstechlabs.com>',
        subject: 'Invitation Email',
        template: 'invitation',
        replyTo: 'Remotiv Notifications <notifications@remotiv.com>',
        data: {token: 'Test'},
        attachments: []
      }
      Mailer.send(message);
    }
  });
}
