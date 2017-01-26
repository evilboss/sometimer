/**
 * Created by jr on 8/25/16.
 */

function timestrToSec(timestr) {
  var parts = timestr.split(":");
  return (parts[0] * 3600) +
    (parts[1] * 60) +
    (+parts[2]);
};
/**
 *
 * @param num
 * @returns {string}
 */
const pad = (num) => {
  if (num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
};
/**
 *
 * @param seconds
 * @returns {string}
 */
const formatTime = (seconds) => {
  return [pad(Math.floor(seconds / 3600) % 60),
    pad(Math.floor(seconds / 60) % 60),
    pad(seconds % 60),
  ].join(":");
};
const addTime = (time1, time2) => {
  time1 = (time1) ? time1 : "00:00:00";
  time2 = (time2) ? time2 : "00:00:00";
  return formatTime(timestrToSec(time1) + timestrToSec(time2));
};
const subtractTime = (time1, time2) => {
  time1 = (time1) ? time1 : "00:00:00";
  time2 = (time2) ? time2 : "00:00:00";
  return formatTime(timestrToSec(time1) - timestrToSec(time2));
};
const secondsToTime = (secs) => {
  var hours = Math.floor(secs / (60 * 60));
  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);
  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);
  var obj = {
    "h": hours,
    "m": minutes,
    "s": seconds
  };
  return obj;
};
const timeDiff = (from, to) => {
  return (to - from) / 1000;
};
const summation = (collection, key) => {
  const total = _.pluck(collection, key).reduce((a, b) => a + b);
  return total;
};
const example = () => {
  var a = new Date('2015-03-25T12:00:00-06:30');
  var b = new Date();
  var difference = timeDiff(a, b);
  console.log(secondsToTime(difference));
};
const formatSeconds = (seconds) => {
  let formatedTime = secondsToTime(seconds);
  return `${formatedTime.h}:${formatedTime.m}`;
};

export {
  addTime,
  subtractTime,
  secondsToTime,
  timeDiff,
  summation,
  formatSeconds,
  example
}