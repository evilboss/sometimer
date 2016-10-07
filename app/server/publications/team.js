import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {auth} from '/server/methods/auth/auth';

export default function () {
  Meteor.publish('team.list', function () {
    const selector = (auth.isAdmin(this.userId)) ? {} : {members: {$all: [this.userId]}};
    console.log(selector);
    const options = {};
    return Team.find(selector, options);
  });

  Meteor.publish('team.members', function (teamId) {
    const selectedTeam = Team.findOne(teamId);
    const staffList = selectedTeam.members;
    const teamOptions = (staffList) ? {_id: {$in: staffList}} : {_id: 'doesnotExist'};
    console.log(staffList, teamOptions);
    return Meteor.users.find();

  });
  Meteor.publish('team.current', function (name) {
    return Team.find({name: name});
  });
}
