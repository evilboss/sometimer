import {Task} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'task.create'(_id, projectId, title) {
      check(_id, String);
      check(projectId, String);
      check(title, String);
      Meteor._sleepForMs(500);
      const createdAt = new Date();
      const author = Meteor.userId();
      const task = {_id, projectId, author, title, createdAt};
      Task.insert(task);
    }
  });
}
