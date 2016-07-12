import {Mongo} from 'meteor/mongo';
const Menu = new Mongo.Collection('menu');

SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});
Menu.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
    optional: true
  },
  icon: {
    type: String,
    label: "Icon",
    optional: true
  },
  url: {
    type: String,
    label: "url",
    optional: true
  },
  roles: {
    type: [String],
    label: 'role',
    optional: true,
  },
  'roles.$': {
    type: String,
    label: 'Role',
    optional: true,
  }
}));
if (Meteor.isServer) {
  Menu.allow({
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

  Menu.deny({
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
export default Menu;
