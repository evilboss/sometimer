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
  {name: 'protos', description: 'Your Protots Company'},
  {name: 'ezyva', description: 'High Perfromance Remote Teams'}
];
const loadTeams = ()=> {
  let userList = ['jr@ezyva.com', 'admin@admin.com', 'aaron.randrup@ezyva.com', 'manager@manager.com', 'staff@staff.com'];
  let members = [];
  _.each(userList, function (userEmail) {
    let member = Meteor.users.findOne({"emails.address": userEmail});
    members.push(member._id);
  });
  console.info('Loading Teams');
  _.each(teamlist, function (team) {
    if (Team.find({name: team.name}).count() === 0) {
      team.members = members;
      Team.insert(team);
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
