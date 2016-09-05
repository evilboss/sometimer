import {SubProjects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'sub_projects.create'(subProject) {
      const createdAt = new Date();
      const author = Meteor.userId();
      subProject.author = author;
      subProject.createdAt = createdAt;
      SubProjects.insert(subProject);
    }
  });
}
