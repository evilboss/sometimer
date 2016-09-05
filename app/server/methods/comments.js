import {Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'comments.create'(_id, projectId, text) {
      check(_id, String);
      check(projectId, String);
      check(text, String);
      const createdAt = new Date();
      const author = Meteor.userId();
      const comment = {_id, projectId, author, text, createdAt};
      Comments.insert(comment);
    }
  });
}
