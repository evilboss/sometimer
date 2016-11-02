/**
 * Created by jr on 8/4/16.
 */
import {Projects} from '/lib/collections';
/*
Migrations.add({
  version: 5,
  name: 'Adds Projects to db.',
  up: function () {
    loadProjects();
  },
  down: function () {
    removeProjects();
  }
});
*/
const projectnames = ['Project 1', 'project 2', 'test'];
const loadProjects = ()=> {
  let userList = ['jr@ezyva.com', 'admin@admin.com', 'aaron.randrup@ezyva.com', 'manager@manager.com', 'staff@staff.com'];
  let members = [];
  _.each(userList, function (userEmail) {
    let member = Meteor.users.findOne({"emails.address": userEmail});
    members.push(member._id);
  });
  console.info('Adding projects');
  _.each(projectnames, function (project) {
    Projects.insert({name: project, createdAt: Date.now(), collaborators: members});
  });
  console.info('displaying projects', Projects.find().fetch());
};
const removeProjects = ()=> {
  _.each(projectnames, function (project) {
    Projects.remove({name: project});
  });
  console.info('displaying projects', Projects.find().fetch());
};
