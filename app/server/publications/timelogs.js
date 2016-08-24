import {Timelogs} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('timelogs', function (userId) {
    return Timelogs.find({userId: userId});
  });
  Meteor.publish('timelogs.by.date', function (date, userId) {
    const selector = {date: date, userId: userId};
    return Timelogs.find(selector);
  });
  Meteor.publish('timelogs.by.id', function (timeLogId) {
    const selector = {_id: timeLogId};
    return Timelogs.find(selector);
  });

}
