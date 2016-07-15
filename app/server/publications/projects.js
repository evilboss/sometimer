import {Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('project-list', function (projectsId) {
    return Projects.find(projectsId);
  });
}
