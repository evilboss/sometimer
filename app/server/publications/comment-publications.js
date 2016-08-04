import {Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('comments.projects', function (projectId) {
    check(projectId, String);
    const selector = {projectId};
    return Comments.find(selector);
  });
}
