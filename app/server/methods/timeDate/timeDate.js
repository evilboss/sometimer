/**
 * Created by jr on 8/9/16.
 */
import moment from 'moment';
/**
 *
 * @param days
 * @returns {Date}
 */
Date.prototype.addDays = (days) => {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};
/**
 *
 * @param startDate Javascript Date Object
 * @param stopDate
 * @returns {Array}
 */
const getDates = (startDate, stopDate) => {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate)
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};
/**
 *
 * @param date
 * @param time
 * @returns {*}
 */
const setTime = (date, time) => {
  currentDate = moment(date);
  time = time.split(':');
  currentDate.set({
    hours: time[0],
    minutes: time[1]
  });
  return currentDate.toDate()
};
/**
 *
 * @returns {{day, month, year, date: *}}
 */
const generateDateToday = () => {
  const date = moment();
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
/**
 *
 * @param timeOut
 * @param timeIn
 * @returns {diff}
 */
const getHoursRendered = (timeOut, timeIn) => {
  timeOut = moment(timeOut).format('DD/MM/YYYY HH:mm:ss');
  timeIn = moment(timeIn).format('DD/MM/YYYY HH:mm:ss');
  let diff = moment.utc(moment(timeOut, "DD/MM/YYYY HH:mm:ss").diff(moment(timeIn, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
  return diff;
};


export {
  setTime,
  setTime,
  getDates,
  generateDateToday,
  getHoursRendered
}

