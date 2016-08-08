import {Meteor} from 'meteor/meteor';
import moment from 'moment';
export default function () {
  Meteor.methods({
    'timesheet_dates.getCutOffDates'() {
      Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        return dat;
      }

      function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
          dateArray.push(currentDate)
          currentDate = currentDate.addDays(1);
        }
        return dateArray;
      }
      const check = moment(new Date);
      const month = check.format('M');
      const day   = check.format('D');
      const year  = check.format('YYYY');
      const startDate = (day<=15)?moment([year, month]).add(-1,"month"):moment(moment([year, month]).add(-1,"month")).add(15,"days");
      const endDate =(day<=15)? moment(startDate).add(14,"days"):moment(startDate).endOf('month');
      const dateArray = getDates(startDate.toDate(), endDate.toDate());
      return dateArray;
    }
  });
}
