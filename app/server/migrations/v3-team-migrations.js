/**
 * Created by jr on 6/8/16.
 */
import {Team} from '/lib/collections';
Migrations.add({
  version: 3,
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
  console.info('Loading Teams');
  _.each(teamlist, function (team) {
    if (Team.find({name: team.name}).count() === 0) {
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
