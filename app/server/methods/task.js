import {Task} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'task.create'(projectId, title) {
      check(_id, String);
      check(projectId, String);
      check(title, String);
      const createdAt = new Date();
      const author = Meteor.userId();
      const task = {projectId, author, title, createdAt};
      Task.insert(task);
    }
  });
}
