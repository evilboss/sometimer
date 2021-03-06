import {Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {auth} from '/server/methods/auth/auth';
export default function () {
  Meteor.publish('project-list', function (site) {
    const selector = (auth.hasPermission(this.userId, 'viewAllProjects')) ? {} : {collaborators: {$all: [this.userId]}};
    (auth.canManage(this.userId)) ? selector.site = site : '';
    const options = {};
    return Projects.find(selector, options);
  });
  Meteor.publish('project.single', function (projectId) {
    const selector = {_id: projectId};
    return Projects.find(selector);
  });
  Meteor.publish('project.task', function (postId) {
    check(postId, String);
    const selector = {projectId};
    return Task.find(selector);
  });
}
