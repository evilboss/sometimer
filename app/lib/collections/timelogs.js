import {Mongo} from 'meteor/mongo';

const Timelogs = new Mongo.Collection('timelogs');
Timelogs.attachSchema(new SimpleSchema({
  timeIn: {
    type: Date,
  },
  timeOut: {
    type: Date,
    optional: true
  },
  outToLunch: {
    type: Date,
    optional: true
  },
  backFromLunch: {
    type: Date,
    optional: true
  },
  status: {
    type: String,

  },
  userId: {
    type: String,
  }
}));

export default Timelogs;
