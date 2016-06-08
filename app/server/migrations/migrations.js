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
    loadMenus();
  },
  down: function () {
    removeAllUsers();
  }
});
/*TODO: Need to have a handler that detects if there is a new migration*/
Meteor.startup(function () {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
});
