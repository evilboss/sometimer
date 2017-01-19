import moment from 'moment/moment';
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
const getTimeLogId = (userId)=> {
  return Meteor.users.findOne(userId).profile;
};
const startShift = () => {
  const timeLog = {
    userId: Meteor.userId(),
    timeIn: new Date(),
    createdAt: new Date(),
    date: moment(new Date).format('DD:MM:YY'),
    currentStatus: 'In',
  };
  const timelogId = Timelogs.insert(timeLog);
  console.log(timelogId);
  updateStatus('In', Meteor.userId(), timelogId);
};
const endShift = (userId) => {
  const {timeLogId} = getTimeLogId(userId);
  const currentLog = Timelogs.findOne(timeLogId);
  const breakLogs = Breaks.find({userId: userId, timeLogId: timeLogId}).fetch();
  const totalBreak = summation(breakLogs, 'duration');
  const timeOut = new Date();
  const totalRendered = (timeDiff(currentLog.timeIn, timeOut) - totalBreak);
  Timelogs.update(timeLogId, {
    $set: {
      currentStatus: 'Out',
      timeOut: timeOut,
      totalBreak: totalBreak,
      completed: true,
      totalRendered: totalRendered
    }
  });
  updateStatus('Out', userId);
};
const startBreak = () => {
  const {timeLogId} = getTimeLogId(Meteor.userId());
  const breaklog = {
    userId: Meteor.userId(),
    timeLogId: timeLogId,
    breakTimeIn: new Date(),
    currentStatus: 'BreakIn'
  };
  const breakId = Breaks.insert(breaklog);
  updateStatus('Break', Meteor.userId(), timeLogId, breakId);
};
const endBreak = (userId) => {
  const {timeLogId, breakId} = getTimeLogId(userId);
  const breakLog = Breaks.findOne(breakId);
  const breakTimeOut = new Date();
  Breaks.update(breakId, {
    $set: {
      currentStatus: 'BreakOut',
      breakTimeOut: breakTimeOut,
      duration: timeDiff(breakLog.breakTimeIn, breakTimeOut)
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
const editLog = (timeIn, timeOut, timelog)=> {
  const breakLogs = Breaks.find({userId: timelog.userId, timeLogId: timelog._id}).fetch();
  const totalBreak = _.pluck(breakLogs, 'duration').reduce((a, b) => addTime(a, b), 0);
  const totalRendered = subtractTime(getHoursRendered(timeOut, timeIn), totalBreak);
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