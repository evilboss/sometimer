import {Timelogs} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('timelogs', function (userId) {
    return Timelogs.find({userId: userId});
  });
}
