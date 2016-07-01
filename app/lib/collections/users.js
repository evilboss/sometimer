import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

let schema = new SimpleSchema({
  emails: {
    type: Array
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  profile: {
    type: new SimpleSchema({
      status: {
        type: String,
        optional: true,
        defaultValue: 'Out'
      },

      firstName: {
        type: String,
        optional: true,
      },
      lastName: {
        type: String,
        optional: true,
      },
      department: {
        type: String,
        optional: true,
      },
      staffType:{
        type: String,
        optional:true,
        defaultValue: 'Regular'
      },
      jobTitle: {
        type: String,
        optional: true
      },
      displayPhoto: {
        type: String,
        optional: true
      },

    }),
    optional: true
  },
  roles: {
    type: [String],
    optional: true
  },
  // In order to avoid an 'Exception in setInterval callback' from Meteor
});

Meteor.users.attachSchema(schema);
