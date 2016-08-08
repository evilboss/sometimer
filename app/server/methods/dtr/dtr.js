/**
 * Created by jr on 6/20/16.
 */
import Timelogs from '/lib/collections/timelogs';
const changeStatus = (status = 'Out')=> {
  console.log(status);
  let statusChange;
  switch (status) {
    case 'In':
      console.log('Break Status Will Occur');
      statusChange = 'On Break';

      const currentLog = Timelogs.findOne({userId: Meteor.userId(), status: 'In'});
      console.log(currentLog);
      if (currentLog) {
        Timelogs.update(currentLog._id, {
          $set: {
            status: statusChange,
            backFromLunch: new Date()
          }
        });
      }
      break;
    case 'On Break':
      console.log('trigger back from lunch');
      statusChange = 'Back From Lunch';
      Timelogs.update({userId: Meteor.userId(), status: 'Out to Lunch'}, {
        $set: {
          status: statusChange,
          backFromLunch: new Date()
        }
      });
      break;
    default:
      console.log('trigger in');
      statusChange = 'In';
      Timelogs.insert({
        timeIn: new Date(),
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
  changeStatus: (status)=>changeStatus(status)
};
export {dtr};