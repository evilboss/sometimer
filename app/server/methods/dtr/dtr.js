/**
 * Created by jr on 6/20/16.
 */
import Timelogs from '/lib/collections/timelogs';
const logTimeIn = ()=> {
  Timelogs.insert({
    timeIn: Date.now(),
    status: 'In',
    userId: Meteor.userId()
  });
};
const logTimeOut = ()=> {
  let currentLog = Timelogs.findOne({status: 'In', userId: Meteor.userId});
  console.log('timelog', currentLog);
};
const changeStatus = (status = 'Out')=> {
  console.log(status);
  let statusChange;
  switch (status) {
    case 'In':
      console.log('Out to lunch action will occur');
      statusChange = 'Out to Lunch';
      Timelogs.update({userId: Meteor.userId(), status: 'In'}, {$set: {status: statusChange, outToLunch: Date.now()}});
      break;
    case 'Out to Lunch':
      console.log('trigger back from lunch');
      statusChange = 'Back From Lunch';
      Timelogs.update({userId: Meteor.userId(), status: 'Out to Lunch'}, {
        $set: {
          status: statusChange,
          backFromLunch: Date.now()
        }
      });
      break;
    case 'Back From Lunch':
      console.log('Trigger Out');
      statusChange = 'Out';
      Timelogs.update({userId: Meteor.userId(), status: 'Back From Lunch'}, {
        $set: {
          status: statusChange,
          timeOut: Date.now(),
          complete: true,
        }
      });
      break;
    default:
      console.log('trigger in');
      statusChange = 'In';
      Timelogs.insert({
        timeIn: Date.now(),
        status: 'In',
        userId: Meteor.userId(),
        outToLunch: '',
        backFromLunch: '',
        timeOut: '',
      });
  }
  if (statusChange) {
    Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.status': statusChange}});
  }
};
const dtr = {
  logTimeIn: ()=>logTimeIn(),
  logTimeOut: ()=>logTimeOut(),
  changeStatus: (status)=>changeStatus(status)
};
export {dtr};