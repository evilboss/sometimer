/**
 * Created by jr on 9/20/16.
 */
import {Email} from 'meteor/email';
const sendInvite = (invite)=> {
  const message = {
    to: `${invite.firstName} ${invite.lastName} <${invite.email}>`,
    subject: 'Invitation Email',
    template: 'invitation',
    replyTo: 'Remotiv Notifications <notifications@remotiv.com>',
    data: {
      token: invite.token,
      name: `${invite.firstName} ${invite.lastName}`,
      position: invite.position,
      site: `www.${invite.site}.${Meteor.absoluteUrl()}`
    },
    attachments: []
  };
  Mailer.send(message);
  return true;
};
const remotivMailer = {
  sendInvite
};
export{remotivMailer};