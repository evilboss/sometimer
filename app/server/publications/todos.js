import {Todos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('todos.projectId', function (taskId) {
    const selector = {taskId: taskId};
    return Todos.find(selector);
  });
}
