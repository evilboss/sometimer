/**
 * Created by evilBoss on 12/30/16.
 */
import moment from 'moment/moment';
import {secondsToTime, summation} from '/lib/lib/time';

const setTime = (date, time)=> {
  currentDate = moment(date);
  time = time.split(':');
  currentDate.set({
    hours: time[0],
    minutes: time[1]
  });
  return currentDate.toDate()
};
const formatSeconds = (seconds)=> {
  let formatedTime = secondsToTime(seconds);
  return `${formatedTime.h}:${formatedTime.m}`;
};

const timeHelpers = {
  setTime,
  formatSeconds
};
export {timeHelpers};
