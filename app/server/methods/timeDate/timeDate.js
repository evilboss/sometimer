/**
 * Created by jr on 8/9/16.
 */
import moment from 'moment';

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days);
  return dat;
};
const getDates = (startDate, stopDate)=> {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate)
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};
const setTime = (date, time)=> {
  currentDate = moment(date);
  time = time.split(':');
  console.log(time[0], time[1])
  currentDate.set({
    hours: time[0],
    minutes: time[1]
  });
  console.log(currentDate.format('DD-MM-YY-HH:MM:SS'));
  return currentDate.toDate()
};
const generateDateToday = ()=> {
  const date = moment(new Date);
  const month = date.format('M');
  const day = date.format('D');
  const year = date.format('YYYY');
  const today = {
    day: day,
    month: month,
    year: year,
    date: date,
  };
  return today;
};
const getHoursRendered = (timeOut, timeIn) => {
  timeOut = moment(timeOut).format('DD/MM/YYYY HH:mm:ss');
  timeIn = moment(timeIn).format('DD/MM/YYYY HH:mm:ss');
  let diff = moment.utc(moment(timeOut, "DD/MM/YYYY HH:mm:ss").diff(moment(timeIn, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
  return diff;
};

export {
  setTime,
  getDates,
  generateDateToday,
  getHoursRendered
}
