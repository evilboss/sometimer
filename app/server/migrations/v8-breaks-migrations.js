/**
 * Created by jr on 8/24/16.
 */
import {Timelogs, Breaks} from '/lib/collections/';
import {getHoursRendered} from '/server/methods/timeDate/timeDate';
import {getRandomInt} from '/lib/lib/utils';
import {addTime, subtractTime} from '/lib/lib/time';
/*Migrations.add({
  version: 8,
  name: 'Add Breaks to staff@staff.com user',
  up: function () {
    loadBreaks();
  },
  down: function () {
    removeBreaks();
  }
});*/
const getTimelogs = (staffId)=> Timelogs.find({userId: staffId}).fetch();
const loadBreaks = ()=> {
  console.info('Adding breaks to staff');
  Meteor._sleepForMs(5000);
  const staff = Meteor.users.findOne({'emails.address': {$regex: 'staff@staff.com', $options: 'i'}});
  console.log(staff);
  const timelogList = (staff) ? getTimelogs(staff._id) : [];
  console.log(timelogList, getTimelogs(staff._id));
  (timelogList) ? _.each(timelogList, function (timelog) {
    const breakCount = getRandomInt(1, 10);
    for (var index = 0; index <= breakCount; index++) {
      const breaklog = {
        userId: staff._id,
        timeLogId: timelog._id,
        breakTimeIn: 'Sample only',
        currentStatus: 'BreakOut',
        breakTimeOut: 'Sample Only',
        duration: '00:15:00'
      };
      Breaks.insert(breaklog);
    }
    const breakLogs = Breaks.find({userId: staff._id, timeLogId: timelog._id}).fetch();
    const totalBreak = _.pluck(breakLogs, 'duration').reduce((a, b) => addTime(a, b), 0);
    const totalRendered = subtractTime(getHoursRendered(timelog.timeOut, timelog.timeIn), totalBreak);
    Timelogs.update(timelog._id, {
      $set: {
        totalBreak: totalBreak,
        totalRendered: totalRendered
      }
    });
  }) : console.error('No timelogs');
};
const removeBreaks = ()=> {
  console.info('Removing breaks');
  const staff = Meteor.users.findOne({'emails.address': {$regex: 'staff@staff.com', $options: 'i'}});
  const timeLogs = Timelogs.find({userId: staff._id}).fetch();
  _.each(timeLogs, function (timelog) {
    Breaks.remove({timeLogId: timelog._id});
  });
};