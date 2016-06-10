import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('team.list', function () {
    return Team.find();
  });
  Meteor.publish('team.current', function (name) {
    console.log('publishing current team');
    console.log(Team.findOne({name: name}));
    return Team.find({name: name});
  });
}
