import {timeHelpers} from '/client/utils/helpers/time-helpers';
import moment from 'moment';
const UpdateLog = (timein, timeout, timelog)=> {
  let timeIn = timeHelpers.setTime(timelog.createdAt, timein);
  let timeOut = timeHelpers.setTime(timelog.createdAt, timeout);
  Meteor.call('timelogs.log.edit', timeIn, timeOut, timelog._id);
  Bert.alert({
    type: 'success',
    style: 'growl-bottom-right',
    title: 'Timelog Updated',
    message: 'Timelog updated',
    icon: 'fa-clock-o'
  });
};
export default {
  update({Meteor, LocalState}, timelogId, timelogType, time) {
    LocalState.set('TIMESHEET_ERROR', null);
    if (!timelogId) {
      LocalState.set('TIMESHEET_ERROR', {timelogId: timelogId, timelogType: timelogType, message: 'Timesheet Error'});
      return;
    }
    if (!time) {
      LocalState.set('TIMESHEET_ERROR', {timelogId: timelogId, timelogType: timelogType, message: 'time is required'});
      return;
    }
  },
  updateLog({Meteor, LocalState}, timein, timeout, timelog){
    let err = [];
    if (!timein) {
      err.push('Time-In cannot be empty');
    }
    if (!timeout) {
      err.push('Time-Out cannot be empty');
    }
    if (timeout && timein) {
      if (timeout <= timein) {
        err.push('Time-Out cannot be earlier than Time-In');
      }
    }
    (_.isEmpty(err)) ?
      UpdateLog(timein, timeout, timelog)
      :
      Bert.alert({
        type: 'danger',
        style: 'growl-bottom-right',
        title: 'Timelog Update Failed',
        message: err.toString(),
        icon: 'fa-clock-o'
      });
  },
  exportLogs({Meteor, LocalState}, teamId, from, to, name){
    var nameFile = `${(name) ? name : teamId}-timelogexport-${from.toString()}-${to.toString()}.csv`;
    Meteor.call('download.team.csv', teamId, from, to, function (err, fileContent) {
      if (fileContent) {
        Bert.alert({
          type: 'success',
          style: 'growl-bottom-right',
          title: 'Timelogs Export',
          message: 'Exporting Timelogs',
          icon: 'fa-table'
        });
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      } else {
        Bert.alert({
          type: 'danger',
          style: 'growl-bottom-right',
          title: 'Timelogs Export',
          message: 'Exporting Timelogs Failed',
          icon: 'fa-table'
        });
      }
    });

  },
  exportSummary({Meteor, LocalState}, teamId, from, to, name){
    var nameFile = `${(name) ? name : teamId}-summary-${from.toString()}-${to.toString()}.csv`;
    Meteor.call('download.team.summary.csv', teamId, from, to, function (err, fileContent) {
      if (fileContent) {
        Bert.alert({
          type: 'success',
          style: 'growl-bottom-right',
          title: 'Summary Export',
          message: 'Exporting Summary',
          icon: 'fa-table'
        });
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      } else {
        Bert.alert({
          type: 'danger',
          style: 'growl-bottom-right',
          title: 'Summary Export',
          message: 'Exporting Summary Failed',
          icon: 'fa-table'
        });
      }
    });

  },
  clearErrors({LocalState}) {
    return LocalState.set('TIMESHEET_ERROR', null);
  }
}
