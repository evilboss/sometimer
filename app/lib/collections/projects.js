import {Mongo} from 'meteor/mongo';

const Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
    optional: true,
    autoform: {
      class: 'input-field',
      afFormGroup: {
        'formgroup-class': 'input-field'
      },
      afFieldInput: {
        class: 'input-field'
      }
    }

  },
  author: {
    type: String,
    autoform: {
      type: "hidden",
      label: false,
      class: 'input-field',
      afFormGroup: {
        'formgroup-class': 'input-field'
      }
    },
    defaultValue: this.userId,
  },
  assignee: {
    type: String,
    label: "Assignee",
    optional: true,
    autoform: {
      class: 'input-field',
      afFormGroup: {
        'formgroup-class': 'input-field'
      },
      afFieldInput: {
        class: 'input-field'
      }
    }
  }
}));

export default Projects;
