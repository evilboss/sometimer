import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user.current', function (usersId) {
    return Meteor.users.find({_id: usersId});
  });
  Meteor.publish('user.name.by.id', function (usersId) {
    return Meteor.users.find({_id: usersId});
  });
}
