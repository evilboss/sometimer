/**
 * Created by jr on 8/9/16.
 */
import {setTime, getDates, generateDateToday, getHoursRendered} from '/server/methods/timeDate/timeDate';
import {Timelogs} from '/lib/collections/';
import moment from 'moment';

Migrations.add({
  version: 6,
  name: 'Add Sample timelogs',
  up: function () {
    addTimelogs();
  },
  down: function () {
    removeTimelogs();
  }
});
const generateLogs = ()=> {
  const {day, month, year} = generateDateToday();
  const startDate = (day <= 15) ? moment([year, month]).add(-1, "month") : moment(moment([year, month]).add(-1, "month")).add(15, "days");
  const endDate = (day <= 15) ? moment(startDate).add(14, "days") : moment(startDate).endOf('month');
  const dateArray = getDates(startDate.toDate(), endDate.toDate());
  return dateArray;
};
const addTimelogs = ()=> {
  console.info('Adding timelogs');
  const staff = Meteor.users.findOne({'emails.address': {$regex: 'staff@staff.com', $options: 'i'}});
  const staffLogs = Timelogs.find({userId: staff._id});
  if (staffLogs.count() === 0) {
    const logs = generateLogs();
    logs.every(function (log) {
        if (moment(log).isSame(moment(), 'day')) {
          return false;
        }
        if (!(moment(log).isoWeekday() === 6 || moment(log).isoWeekday() === 7)) {
          let timeIn = setTime(log, '08:00');
          let timeOut = setTime(log, '17:00');
          Timelogs.insert({
            timeIn: timeIn,
            timeOut: timeOut,
            userId: staff._id,
            completed: true,
            date: moment(log).format('DD:MM:YY'),
          });
        }

        return true;
      }
    );

  }
};
const removeTimelogs = ()=> {
  console.info('Removing timelogs');
  const staff = Meteor.users.findOne({'emails.address': {$regex: 'staff@staff.com', $options: 'i'}});
  const staffLogs = Timelogs.find({userId: staff._id}).fetch();
  _.each(staffLogs, function (log) {
    Timelogs.remove(log);
  });

};
export {
  addTimelogs,
  removeTimelogs
};