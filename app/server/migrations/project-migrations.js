/**
 * Created by jr on 8/4/16.
 */
import {Projects} from '/lib/collections';
const projectnames = ['Project 1', 'project 2', 'test'];
export function loadProjects() {
  let userList = ['jr@ezyva.com', 'admin@admin.com', 'aaron.randrup@ezyva.com','manager@manager.com'];
  let members = [];
  _.each(userList, function (userEmail) {
    let member = Meteor.users.findOne({"emails.address": userEmail});
    members.push(member._id);
  });
  console.log('Adding projects');
  _.each(projectnames, function (project) {
    Projects.insert({name: project, createdAt: Date.now(), members: members});
  });
  console.log('displaying projects', Projects.find().fetch());
}
export function removeProjects() {
  _.each(projectnames, function (project) {
    Projects.remove({name: project});
  });
  console.log('displaying projects', Projects.find().fetch());
}
