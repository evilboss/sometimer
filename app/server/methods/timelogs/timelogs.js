import moment from 'moment/moment';
import {Timelogs, Breaks} from '/lib/collections/';
import {getHoursRendered, addTime, subtractTime} from '/server/methods/timeDate/timeDate';
/**
 *
 * @param status
 */
const updateStatus = (status)=> {
  Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.status': status}});
};
const startShift = ()=> {
  console.log('Starting Shift');
  updateStatus('In');
  const sameDayLog = Timelogs.findOne({userId: Meteor.userId(), date: moment(new Date).format('DD:MM:YY')});
  console.log(sameDayLog);
  const timeLog = {
    userId: Meteor.userId(),
    timeIn: new Date(),
    createdAt: new Date(),
    date: moment(new Date).format('DD:MM:YY'),
    currentStatus: 'In'
  };
  if (!sameDayLog) {
    Timelogs.insert(timeLog);
  } else {
    Timelogs.update({
      _id: sameDayLog._id

    }, {
      $set: {
        timeIn: new Date(),
        currentStatus: 'In'
      }
    });
  }
};
const endShift = ()=> {
  console.log('Ending Shift');
  updateStatus('Out');
  const currentLog = Timelogs.findOne({
    userId: Meteor.userId(),
    currentStatus: 'In',
    date: moment(new Date).format('DD:MM:YY')
  });
  const breakLogs = Breaks.find({userId: Meteor.userId(), timeLogId: currentLog._id}).fetch();
  const totalBreak = _.pluck(breakLogs, 'duration').reduce((a, b) => addTime(a, b), 0);
  const timeOut = new Date();
  const totalRendered = subtractTime(getHoursRendered(timeOut, currentLog.timeIn), totalBreak);
  Timelogs.update(currentLog._id, {
    $set: {
      currentStatus: 'Out',
      timeOut: timeOut,
      totalBreak: totalBreak,
      completed: true,
      totalRendered: totalRendered
    }
  });

};
const startBreak = ()=> {
  console.log('Starting Break');
  updateStatus('Break');
  const currentLog = Timelogs.findOne({
    userId: Meteor.userId(),
    currentStatus: 'In',
    date: moment(new Date).format('DD:MM:YY')
  });
  const breaklog = {
    userId: Meteor.userId(),
    timeLogId: currentLog._id,
    breakTimeIn: new Date(),
    currentStatus: 'BreakIn'
  };
  console.log(breaklog);
  Breaks.insert(breaklog);
};
const endBreak = ()=> {
  console.log('Ending Break');
  updateStatus('In');
  const currentLog = Timelogs.findOne({
    userId: Meteor.userId(),
    currentStatus: 'In',
    date: moment(new Date).format('DD:MM:YY')
  });
  const breakLog = Breaks.findOne({
    userId: Meteor.userId(),
    timeLogId: currentLog._id,
    currentStatus: 'BreakIn'
  });
  Breaks.update(breakLog._id, {
    $set: {
      currentStatus: 'BreakOut',
      breakTimeOut: new Date(),
      duration: getHoursRendered(new Date(), breakLog.breakTimeIn)
    }
  });
};
/**
 *
 * @param timelogId
 */
const approve = (timelogId)=> {
  const timelog = Timelogs.findOne(timelogId);
  (timelog)? Timelogs.update(timelog,{
    $set:{approved:true}
  }):''
}
const timelogs = {
  startShift: ()=>startShift(),
  endShift: ()=>endShift(),
  startBreak: ()=> startBreak(),
  endBreak: ()=> endBreak(),
  approve: (timeLogId)=>approve(timeLogId)
};

export {timelogs};