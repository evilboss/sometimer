/**
 * Created by jr on 8/8/16.
 */
import Timelogs from '/lib/collections/timelogs';
const updateStatus = (status)=> {
  Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.status': status}});
};
const startShift = ()=> {
  console.log('Starting Shift');
  updateStatus('In');
};
const endShift = ()=> {
  console.log('Ending Shift');
  updateStatus('Out');

};
const startBreak = ()=> {
  console.log('Starting Break');
  updateStatus('Break');
};
const endBreak = ()=> {
  console.log('Ending Break');
  updateStatus('In');
};
const timelogs = {
  startShift: ()=>startShift(),
  endShift: ()=>endShift(),
  startBreak: ()=> startBreak(),
  endBreak: ()=> endBreak()
};
export {timelogs};