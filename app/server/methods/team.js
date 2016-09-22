import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'team.insert'(team) {
      Team.insert(team);
    }
  });
}
