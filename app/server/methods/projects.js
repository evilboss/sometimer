import {Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {projectModel} from './projects/project-model';
export default function () {
  Meteor.methods({
    'projects.insert'(project) {
      projectModel.insert(project);
    },
    'projects.update'(){
      projectModel.update();
    },
  });
}
