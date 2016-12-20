/**
 * Created by jr on 9/20/16.
 */
import {Email} from 'meteor/email';
const addSubdomain = (subDomain) => {
  let baseUrl = Meteor.absoluteUrl();
  let urlParts = baseUrl.split('//');
  let urlIndex = (urlParts[1] == 'www') ? 2 : 1;
  return `${urlParts[0]}//${subDomain}.${urlParts[urlIndex]}`;
};
const sendInvite = (invite) => {
  const message = {
    to: `${invite.firstName} ${invite.lastName} <${invite.email}>`,
    subject: 'Invitation Email',
    template: 'invitation',
    replyTo: 'Remotiv Notifications <notifications@remotiv.com>',
    data: {
      token: invite.token,
      name: `${invite.firstName} ${invite.lastName}`,
      position: invite.position,
      message: invite.message,
      site: addSubdomain(invite.site)
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