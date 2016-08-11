/**
 * Created by jr on 5/16/16.
 */
import {addTimelogs} from './timelogs-migrations';
import {removeAllStaffList, loadStaffList} from './teamlist-migrations';
/*
* TODO: Migration Version list
* Migratiosn Version 1 : Add default users to app
*
* */
const runMigrationsFromStart = ()=> {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
};
const runOnlyToLatest = () => {
  Migrations.migrateTo('latest');
};
Meteor.startup(function () {
  //TODO: Stopped migrations from running
  //(process.env.NODE_ENV === 'development') ? runMigrationsFromStart() : runOnlyToLatest();
  runOnlyToLatest();
});
