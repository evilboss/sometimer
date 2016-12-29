/**
 * Created by jr on 6/8/16.
 */
import {Team} from '/lib/collections';

/*Migrations.add({
  version: 4,
  name: 'Add Default Teams to app',
  up: function () {
    loadTeams();
  },
  down: function () {
    removeAllTeams();
  }
});*/

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

  console.info('waiting for staffs to load');
  Meteor._sleepForMs(5000);
  let creator = Accounts.findUserByEmail('notifications@remotiv.io');
  console.log(creator._id);
  _.each(teamlist, function (team) {
    if (Team.find({name: team.name}).count() === 0) {
      let members = [];
      _.each(team.members, (userEmail)=> {
        let member = Accounts.findUserByEmail(userEmail);
        if (member) {
          console.info('check user first', member._id);
          members.push(member._id);

        }
      });
      let teamLeader = Accounts.findUserByEmail(team.teamLeader);
      const newTeam = {
        createdAt: new Date(),
        name: team.name,
        description: team.description,
        teamLeader: (teamLeader) ? [teamLeader._id] : [],
        members: members,
        site: 'remote',
        creator: (creator) ? creator._id : ''
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
