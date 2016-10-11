/**
 * Created by jr on 5/16/16.
 */
/*
 * V1: Admin users migration
 * V2: Menu list with user role
 * V3: Initial user./ Staff migration
 * V4: Team migrations
 * V5: Project Migration
 * V6: Timelogs for staff@staff.com user
 * v7: Teamlist migrations
 * v8: break migrations for staff@staff.com user
 * V9: Add client user stafflist
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
