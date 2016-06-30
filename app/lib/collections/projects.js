import {Mongo} from 'meteor/mongo';

const Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Project Name",
    unique: true,
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
  description: {
    type: String,
    label: "Description",
    unique: true,
    autoform: {
      class: 'input-field',
      type: 'textarea',
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
