import {Mongo} from 'meteor/mongo';

const Timelogs = new Mongo.Collection('timelogs');
Timelogs.attachSchema(new SimpleSchema({
  createdAt: {
    type: Date,
    defaultValue: Date.now
  },
  timeIn: {
    type: Date,
  },
  timeOut: {
    type: Date,
    optional: true
  },
  status: {
    type: String,

  }
}));

export default Timelogs;
