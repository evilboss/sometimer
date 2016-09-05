import {SubProjects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('sub_projects.by.projectId', function (projectId) {
    const selector = {projectId:projectId};
    return SubProjects.find(selector);
  });
}
