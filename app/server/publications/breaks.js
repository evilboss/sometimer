import {Breaks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('breaks.timelog', function (timeLogId) {
    return Breaks.find({timeLogId: timeLogId});
  });
}
