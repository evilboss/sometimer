import moment from 'moment-timezone';
import {Timelogs, Breaks} from '/lib/collections/';
import {addTime, subtractTime, timeDiff, secondsToTime, summation} from '/lib/lib/time';
import {getHoursRendered} from '/server/methods/timeDate/timeDate';
/**
 *
 * @param status
 */
const updateStatus = (status, userId, timelogId = null, breakId = null) => {
  Meteor.users.update({_id: userId}, {
    $set: {
      'profile.status': status,
      'profile.timeLogId': timelogId,
      'profile.breakId': breakId
    }
  });
};
const getTimeLogId = (userId) => {
  return Meteor.users.findOne(userId).profile;
};
const startShift = () => {
  let {timezone} = getTimeLogId(Meteor.userId());
  let currentDate = new Date().toLocaleString("en-US", {timeZone: (timezone) ? timezone : "Asia/Manila"});
  console.log('starting shift');
  const timeLog = {
    userId: Meteor.userId(),
    timeIn: new Date(currentDate),
    createdAt: moment(new Date(currentDate)).tz((timezone) ? timezone : "Asia/Manila").format(),
    date: moment(new Date(currentDate)).tz((timezone) ? timezone : "Asia/Manila").format('DD:MM:YY'),
    currentStatus: 'In',
  };
  const timelogId = Timelogs.insert(timeLog);
  console.log(timelogId);
  updateStatus('In', Meteor.userId(), timelogId);
};
const endShift = (userId) => {
  const {timeLogId, timezone} = getTimeLogId(Meteor.userId());
  const currentLog = Timelogs.findOne(timeLogId);
  const breakLogs = Breaks.find({userId: userId, timeLogId: timeLogId}).fetch();
  const totalBreak = (_.isEmpty(breakLogs)) ? 0 : summation(breakLogs, 'duration');
  const timeOut = new Date().toLocaleString("en-US", {timeZone: (timezone) ? timezone : "Asia/Manila"});
  const totalRendered = (timeDiff(currentLog.timeIn, new Date(timeOut)) - totalBreak);
  console.log(timeDiff(currentLog.timeIn, new Date(timeOut), totalBreak, (timeDiff(currentLog.timeIn, new Date(timeOut)) - totalBreak)));
  Timelogs.update(timeLogId, {
    $set: {
      currentStatus: 'Out',
      timeOut: new Date(timeOut),
      totalBreak: totalBreak,
      completed: true,
      totalRendered: totalRendered
    }
  });
  updateStatus('Out', userId);
};
const startBreak = () => {
  const {timeLogId, timezone} = getTimeLogId(Meteor.userId());
  let currentDate = new Date().toLocaleString("en-US", {timeZone: (timezone) ? timezone : "Asia/Manila"});

  const breaklog = {
    userId: Meteor.userId(),
    timeLogId: timeLogId,
    breakTimeIn: new Date(currentDate),
    currentStatus: 'BreakIn'
  };
  const breakId = Breaks.insert(breaklog);
  updateStatus('Break', Meteor.userId(), timeLogId, breakId);
};
const endBreak = (userId) => {
  const {timeLogId, breakId, timezone} = getTimeLogId(userId);
  const breakLog = Breaks.findOne(breakId);
  const breakTimeOut = new Date().toLocaleString("en-US", {timeZone: (timezone) ? timezone : "Asia/Manila"});
  Breaks.update(breakId, {
    $set: {
      currentStatus: 'BreakOut',
      breakTimeOut: breakTimeOut,
      duration: timeDiff(breakLog.breakTimeIn, new Date(breakTimeOut))
    }
  });
  updateStatus('In', Meteor.userId(), timeLogId);
};
const approve = (timelogId) => {
  const timelog = Timelogs.findOne(timelogId);
  (timelog) ? Timelogs.update(timelog, {
      $set: {approved: true}
    }) : ''
};
const editLog = (timeIn, timeOut, timelog) => {
  const breakLogs = Breaks.find({userId: timelog.userId, timeLogId: timelog._id}).fetch();
  const totalBreak = (_.isEmpty(breakLogs)) ? 0 : summation(breakLogs, 'duration');
  const totalRendered = (timeDiff(timeIn, timeOut) - totalBreak);
  (timelog) ? Timelogs.update(timelog, {
      $set: {
        timeIn: timeIn,
        timeOut: timeOut,
        totalBreak: totalBreak,
        totalRendered: totalRendered
      }
    }) : ''
};
const timelogs = {
  startShift: () => startShift(),
  endShift: (userId) => endShift(userId),
  startBreak: () => startBreak(),
  endBreak: (userId) => endBreak(userId),
  approve: (timeLogId) => approve(timeLogId),
  editLogs: (timeLogId, totalRendered) => editLogs(timeLogId, totalRendered),
  editLog: editLog

};
export {timelogs};