import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('team.list', function () {
    return Team.find();
  });
  Meteor.publish('team.current', function (name) {
    return Team.find({name: name});
  });
}
