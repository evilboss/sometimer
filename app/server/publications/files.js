import {Files} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('files', function () {
    let selector = {userId: this.userId};
    return Files.find(selector);
  });
}
