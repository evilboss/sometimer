/**
 * Created by jr on 5/16/16.
 */

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
Meteor.startup(function () {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
});
