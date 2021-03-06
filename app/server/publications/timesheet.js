import {Timesheet} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('timesheet', function () {
    return Timesheet.find();
  });

  Meteor.publish('staff.timesheet', function (userId) {
    return Meteor.users.find(userId);
  });
}
