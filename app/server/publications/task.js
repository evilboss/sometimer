import {Task} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('task', function () {
    return Task.find();
  });
  Meteor.publish('task.projects', function (projectId) {
    check(projectId, String);
    const selector = {projectId};

    return Task.find(selector);
  });
}
