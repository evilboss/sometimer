/**
 * Created by jr on 8/25/16.
 */

function timestrToSec(timestr) {
  var parts = timestr.split(":");
  return (parts[0] * 3600) +
    (parts[1] * 60) +
    (+parts[2]);
}
/**
 *
 * @param num
 * @returns {string}
 */
const pad = (num)=> {
  if (num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}
/**
 *
 * @param seconds
 * @returns {string}
 */
const formatTime = (seconds)=> {
  return [pad(Math.floor(seconds / 3600) % 60),
    pad(Math.floor(seconds / 60) % 60),
    pad(seconds % 60),
  ].join(":");
}
const addTime = (time1, time2)=> {
  time1 = (time1) ? time1 : "00:00:00";
  time2 = (time2) ? time2 : "00:00:00";
  return formatTime(timestrToSec(time1) + timestrToSec(time2));
}
const subtractTime = (time1, time2)=> {
  time1 = (time1) ? time1 : "00:00:00";
  time2 = (time2) ? time2 : "00:00:00";
  return formatTime(timestrToSec(time1) - timestrToSec(time2));
}
export {
  addTime,
  subtractTime
}