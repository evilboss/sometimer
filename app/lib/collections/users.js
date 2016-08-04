import {Meteor} from 'meteor/meteor';
const Users = Meteor.users;

Users.attachSchema(new SimpleSchema({
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
      lastName: {
        type: String,
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
      department: {
        type: String,
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
      staffType: {
        type: String,
        optional: true,
        defaultValue: 'Regular',
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
      jobTitle: {
        type: String,
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
  "roles.$": {
    type: String,
    optional: true,
  }
// In order to avoid an 'Exception in setInterval callback' from Meteor
}));

export default Users;
