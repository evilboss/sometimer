import {Timelogs} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {timelogs} from './timelogs/timelogs';
export default function () {
  Meteor.methods({
    'timelogs.startShift'(){
      timelogs.startShift();
    },
    'timelogs.startBreak'(){
      timelogs.startBreak();
    },
    'timelogs.endBreak'(){
      timelogs.endBreak();
    },
    'timelogs.endShift'(){
      timelogs.endShift();
    }

  });
}
