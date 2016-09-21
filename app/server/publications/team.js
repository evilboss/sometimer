import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('team.list', function () {
    const selector = {
      members: {$all: [this.userId]}
    };
    const options = {};
    return Team.find(selector, options);
  });

  Meteor.publish('team.members', function (teamId) {
    const selectedTeam = Team.findOne(teamId);
    const staffList = selectedTeam.members;
    const teamOptions = {_id: {$in: staffList}};
    console.log(Meteor.users.find(teamOptions).fetch());
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
