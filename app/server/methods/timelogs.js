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
    'timelogs.endBreak'(userId = this.userId){
      timelogs.endBreak(userId);
    },
    'timelogs.endShift'(userId = this.userId){
      timelogs.endShift(userId);
    },
    'timelogs.approve'(timeLogId){
      timelogs.approve(timeLogId);
    },
    'timelogs.editLogs'(timeLogId, totalRendered){
      timelogs.editLogs(timeLogId, totalRendered);
    },
    'timelogs.log.edit'(timeIn, timeOut, timeLogId){
      console.info('updating timelog');
      let timelog = Timelogs.findOne(timeLogId);
      timelogs.editLog(timeIn, timeOut, timelog);
    }


  });
}
