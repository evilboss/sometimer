import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('team.list', function () {
    const currentUser = Meteor.users.findOne(this.userId);
    const selector =
      (currentUser) ? (currentUser.profile) ? (currentUser.profile.role == 'admin') ? {} : {members: {$all: [this.userId]}} : {members: {$all: [this.userId]}} : {members: {$all: [this.userId]}};
    const options = {};
    return Team.find(selector, options);
  });

  Meteor.publish('team.members', function (teamId) {
    const selectedTeam = Team.findOne(teamId);
    const staffList = selectedTeam.members;
    const teamOptions = (staffList) ? {_id: {$in: staffList}} : {_id: 'doesnotExist'};
    return Meteor.users.find(teamOptions, {
      fields: {
        createdAt: false,
        emails: false,
        services: false,
        'profile.role': false,
      }
    });

  });
  Meteor.publish('team.current', function (name) {
    return Team.find({name: name});
  });
}
