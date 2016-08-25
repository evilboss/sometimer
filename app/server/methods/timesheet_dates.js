import {Meteor} from 'meteor/meteor';
import moment from 'moment';
import {getDates, generateDateToday} from './timeDate/timeDate';
export default function () {
  Meteor.methods({
    'timesheet_dates.getCutOffDates'(from, to) {
      const {day, month, year} = generateDateToday();
      const startDate = (from) ? moment(from) : (day <= 15) ? moment([year, month]).add(-1, "month") : moment(moment([year, month]).add(-1, "month")).add(15, "days");
      const endDate = (to) ? moment(to) : (day <= 15) ? moment(startDate).add(14, "days") : moment(startDate).endOf('month');
      const dateArray = getDates(startDate.toDate(), endDate.toDate());
      return dateArray;
    }
  });
}
