/**
 * Created by jr on 5/16/16.
 */
/*
 * V1: Admin users migration
 * V2: Menu list with user role
 * V3: Team migrations
 * V4: Initial user./ Staff migration
 * V5: Project Migration
 * V6: Timelogs for staff@staff.com user
 * v7: Teamlist migrations
 * TODO: fix migration of breaks
 * v8: break migrations for staff@staff.com user
 * */
const runMigrationsFromStart = ()=> {
  Migrations.migrateTo(0);
  Migrations.migrateTo('latest');
};
const runOnlyToLatest = () => {
  /*TODO: If migrating from 0 or off a meteor reset, Migrate first to 7 then continue to latest, bug tracked as per line 12*/
  Migrations.migrateTo('latest');
};
Meteor.startup(function () {
  //TODO: Stopped migrations from running
  //(process.env.NODE_ENV === 'development') ? runMigrationsFromStart() : runOnlyToLatest();
  runOnlyToLatest();
});
