/**
 * Created by jr on 5/16/16.
 */
import {loadMenus, removeAllMenus} from './menu-migration';
import {loadUsers, removeAllUsers} from './admin-migrations';
Migrations.add({
  version: 1,
  name: 'Adds default users to app',

  up: function () {
    loadUsers();
  },
  down: function () {
    removeAllUsers();
  }
});
Migrations.add({
  version: 2,
  name: 'Adds Menus to app',

  up: function () {
    loadMenus();
  },
  down: function () {
    removeAllMenus();
  }
});
/*TODO: Need to have a handler that detects if there is a new migration*/
Meteor.startup(function () {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
});
