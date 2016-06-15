import {Mongo} from 'meteor/mongo';
import React from 'react';
const Team = new Mongo.Collection('team');
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {DocDict} from '../local-data/reactive-dict';
Team.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Team Name",
    max: 200,
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
  members: {
    type: Array,
    optional: true,
    autoform:{
      'listGroupClass':'test',
      'list-groupClass':'test',
      'list':'list-custom',

    }
  },
  "members.$": {
    type: Object,
    autoform: {
      'listGroupClass':'test',
      'list-groupClass':'test',
      'listClass':'list-custom',
      'panelClass': 'test',

      class: 'input-field',
      afFormGroup: {
        'formgroup-class': 'input-field'
      },
      afFieldInput: {
        class: 'input-field'
      },
      'autoform-remove-item-wrap': 'test'
    }
  },
  "members.$.address": {
    label: "Email Address",
    type: String,
    regEx: SimpleSchema.RegEx.Email,
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
//Collection hooks
Team.after.insert(function (userId, doc) {
  if (Meteor.isClient) {
    if (doc._id) {
      DocDict.set('teamDocument', doc);
      if (DocDict.get('teamDocument')) {
        console.log(DocDict.get('teamDocument'), 'yes');
      }
      console.log(DocDict.get('teamDocument'));
      FlowRouter.go('/team/create/members');
    }

  }
});


if (Meteor.isServer) {
  Team.allow({
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

  Team.deny({
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

export default Team;