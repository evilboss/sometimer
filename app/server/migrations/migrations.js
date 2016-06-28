/**
 * Created by jr on 5/16/16.
 */
import {loadMenus, removeAllMenus} from './menu-migration';
import {loadUsers, removeAllUsers} from './admin-migrations';
import {loadTeams, removeAllTeams} from './team-migrations';
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
const runMigrationsFromStart = ()=> {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
};
const runOnlyToLatest = () => {
  Migrations.migrateTo('latest')
};
Meteor.startup(function () {
  //TODO: Stopped migrations from running
  //(process.env.NODE_ENV === 'development') ? runMigrationsFromStart() : runOnlyToLatest();
  runOnlyToLatest();
});
