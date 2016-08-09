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
const teamlist = ['protos', 'ezyva'];
const loadTeams = ()=> {
  console.log('Loading Teams');
  if (Team.find({}).count() === 0) {
    _.each(teamlist, function (team) {
      Team.insert({name: team});

    });
  }
};
const removeAllTeams = ()=> {
  _.each(teamlist, function (team) {
    const teamToRemove = Team.findOne({name: team});
    if (teamToRemove) {
      Team.remove(teamToRemove._id);
    }
  });
}
