import {Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('project-list', function () {
    const userId = '8bDnNNvhPzQw3BHxj';
    console.log('projectList',Projects.find().fetch());
    const selector = {
      members: {$all: [this.userId]}
    };
    const options = {};
    console.log(Projects.find(selector, options).fetch());
    return Projects.find(selector, options);
  });

  Meteor.publish('project.single', function (projectId) {
    check(projectId, String);
    const selector = {_id: projectId};
    return Projects.find(selector);
  });

  Meteor.publish('project.task', function (postId) {
    check(postId, String);
    const selector = {projectId};
    return Task.find(selector);
  });
}
