import {Todos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'todos.create'(todo) {
      Todos.insert(todo);
    }
  });
}
