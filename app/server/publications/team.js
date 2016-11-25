import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {auth} from '/server/methods/auth/auth';
const fields = {'_id': 1, 'profile': 1, 'emails': 1};
export default function () {
  Meteor.publish('team.list', function (site) {
    console.log('team.list');
    const selector = (auth.hasPermission(this.userId, 'viewAllTeams')) ?
    {} : (auth.isAdmin(this.userId)) ?
    {creator: this.userId}
      : (auth.isManager(this.userId)) ?
    {teamLeader: this.userId} : {
      members: {
        $all: [this.userId]
      }
    };
    (auth.canManage(this.userId)) ? selector.site = site : '';
    const options = {};
    console.log(selector);
    return Team.find(selector, options);
  });
  Meteor.publish('team.members', function (teamId) {
    const selectedTeam = Team.findOne(teamId);
    const staffList = [];
    (selectedTeam.members) ? staffList.push.apply(staffList, selectedTeam.members) : '';
    (selectedTeam.teamLeader) ? staffList.push(selectedTeam.teamLeader) : '';
    const teamOptions = (staffList) ? {_id: {$in: staffList}} : {_id: 'doesnotExist'};
    return [Meteor.users.find(teamOptions, {fields: fields}), Team.find(teamId)];
  });
  Meteor.publish('team.current', function (name) {
    return Team.find({name: name});
  });
}
