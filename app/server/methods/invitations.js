import {Invitations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'invitations.send'(invite) {
      check( invite, {
        email: String,
        role: String
      });
      const sendInvitation ={
        email: invite.email,
        token: Random.hexString( 16 ),
        role: invite.role,
        date: ( new Date() ).toISOString()

      };
      console.info('sending Invite',sendInvitation);
    }
  });
}
