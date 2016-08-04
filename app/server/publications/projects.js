import {Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('project-list', function () {
    const userId = '8bDnNNvhPzQw3BHxj';
    const selector = {
      members: {$all: [this.userId]}
    };
    const options = {};
    return Projects.find(selector, options);
  });

  Meteor.publish('project.single', function (projectId) {
    console.log(projectId);
    const selector = {_id: projectId};
    return Projects.find(selector);
  });

  Meteor.publish('project.task', function (postId) {
    check(postId, String);
    const selector = {projectId};
    return Task.find(selector);
  });
}
