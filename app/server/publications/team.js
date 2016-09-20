import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('team-list', function () {
    const options = {};
    return Team.find(options);
  });

  Meteor.publish('team.current', function (name) {
    return Team.find({name: name});
  });
}
