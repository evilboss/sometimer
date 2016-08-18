import {Invitations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'invitations.send'() {
      console.log('sending Invite');
    }
  });
}
