/**
 * Created by jr on 5/16/16.
 */
import {loadMenus, removeAllMenus} from './menu-migration';
import {loadUsers, removeAllUsers} from './admin-migrations';
import {loadTeams,removeAllTeams} from './team-migrations';
Migrations.add({
  version: 1,
  name: 'Add default users to app',

  up: function () {
    loadUsers();
  },
  down: function () {
    removeAllUsers();
  }
});
Migrations.add({
  version: 2,
  name: 'Add Menu list to app',

  up: function () {
    loadMenus();
  },
  down: function () {
    removeAllMenus();
  }
});
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
/*TODO: Need to have a handler that detects if there is a new migration*/
Meteor.startup(function () {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
});
