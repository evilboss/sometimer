import {Invitations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
  Meteor.publish('invitationsByUser', function () {
    const selector = {inviter: this.userId};
    return Invitations.find(selector);
  });
  Meteor.publish('invitationsById', function (id) {
    const selector = {_id: id};
    return Invitations.find(selector);
  });
}