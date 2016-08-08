import moment from 'moment/moment';
import {Timelogs, Breaks} from '/lib/collections/';


const updateStatus = (status)=> {
  Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.status': status}});
};
const startShift = ()=> {
  console.log('Starting Shift');
  updateStatus('In');
  const timeLog = {
    userId: Meteor.userId(),
    timeIn: new Date(),
    createdAt: new Date(),
    date: moment(new Date).format('DD:MM:YY'),
    currentStatus: 'In'
  };
  Timelogs.insert(timeLog)
};
const endShift = ()=> {
  console.log('Ending Shift');
  updateStatus('Out');
  const currentLog = Timelogs.findOne({
    userId: Meteor.userId(),
    currentStatus: 'In',
    date: moment(new Date).format('DD:MM:YY')
  });
  console.log(currentLog);
  Timelogs.update(currentLog._id, {
    $set: {
      currentStatus: 'Out',
      timeOut: new Date()
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
      breakTimeOut: new Date()
    }
  });
  console.log(breakLog);
};
const timelogs = {
  startShift: ()=>startShift(),
  endShift: ()=>endShift(),
  startBreak: ()=> startBreak(),
  endBreak: ()=> endBreak()
};
export {timelogs};