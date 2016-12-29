/**
 * Created by jr on 8/9/16.
 */
import {setTime, getDates, generateDateToday, getHoursRendered} from '/server/methods/timeDate/timeDate';
import {Timelogs} from '/lib/collections/';
import moment from 'moment';
/*
Migrations.add({
  version: 5,
  name: 'Add Sample timelogs',
  up: function () {
    addTimelogs();
  },
  down: function () {
    removeTimelogs();
  }
});*/

const addTimelogs = ()=> {
  const generateLogs = ()=> {
    const {day, month, year} = generateDateToday();
    let startDate = (day <= 15) ? moment([year, month]).add(-1, "month") : moment(moment([year, month]).add(-1, "month")).add(15, "days");
    let endDate = (day <= 15) ? moment(startDate).add(14, "days") : moment(startDate).endOf('month');
    console.log('moment issue?', (moment(moment([year, month]).add(-1, "month")).add(15, "days")).toDate());
    const dateArray = getDates(startDate.toDate(), endDate.toDate());
    return dateArray;
  };
  console.info('Adding timelogs');
  const staffEmails = [
    'staff@staff.com',
    'iob.tungul@ezyva.com',
    'dan.arceo@ezyva.com',
    'aaron.randrup@ezyva.com',
    'jr@ezyva.com'
  ];
  const logs = generateLogs();
  _.each(staffEmails, (email)=> {
    let staff = Accounts.findUserByEmail(email);
    _.each(logs, (log)=> {
      //if (!(moment(log).isoWeekday() === 6 || moment(log).isoWeekday() === 7)) {
      let timeIn = setTime(log, '08:00');
      let timeOut = setTime(log, '17:00');
      let timelog = {
        timeIn: timeIn,
        timeOut: timeOut,
        userId: staff._id,
        completed: true,
        date: moment(log).format('DD:MM:YY'),
      };
      console.log(timelog);
      Timelogs.insert(timelog);
      //}
    });
  });

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