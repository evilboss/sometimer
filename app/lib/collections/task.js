import {Mongo} from 'meteor/mongo';
const Task = new Mongo.Collection('task');
SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});
Task.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'custom'
      }
    }

  },
  author: {
    type: String,
    label: "Author",
    optional: true
  },
  assignee: {
    type: String,
    label: "Assignee",
    optional: true
  }
}));
if (Meteor.isServer) {
  Task.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Task.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}

export default Task;