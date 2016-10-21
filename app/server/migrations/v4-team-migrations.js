/**
 * Created by jr on 6/8/16.
 */
import {Team} from '/lib/collections';
Migrations.add({
  version: 4,
  name: 'Add Default Teams to app',
  up: function () {
    loadTeams();
  },
  down: function () {
    removeAllTeams();
  }
});
const teamlist = [
  {
    name: 'Protos',
    description: 'Offshore Outsourcing companies, is well established to',
    members: ['staff@staff.com'],
    teamLeader: 'manager@manager.com'
  },
  {
    name: 'EZyVa',
    description: 'High Perfromance Remote Teams',
    members: ['kimberly.ocariz@ezyva.com', 'dan.arceo@ezyva.com'],
    teamLeader: 'dan.arceo@ezyva.com'
  },
  {
    name: 'Remotiv',
    description: 'Your Remote Staff Solution',
    members: ['jr@ezyva.com', 'aaron.randrup@ezyva.com'],
    teamLeader: 'jr@ezyva.com',
  }

];
const loadTeams = ()=> {
  _.each(teamlist, function (team) {
    if (Team.find({name: team.name}).count() === 0) {
      let members = [];
      _.each(team.members, (userEmail)=> {
        let member = Meteor.users.findOne({"emails.address": userEmail})._id;
        members.push(member);
      });
      let teamLeader = Meteor.users.findOne({"emails.address": team.teamLeader})._id;
      const newTeam = {
        createdAt: new Date(),
        name: team.name,
        description: team.description,
        teamLeader: teamLeader,
        members: members,
      };
      Team.insert(newTeam);
    }
  });
};
const removeAllTeams = ()=> {
  console.info('Removing Teams');
  _.each(teamlist, function (team) {
    const teamToRemove = Team.findOne({name: team.name});
    if (teamToRemove) {
      Team.remove(teamToRemove._id);
    }
  });
}
