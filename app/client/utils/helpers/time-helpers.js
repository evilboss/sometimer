/**
 * Created by evilBoss on 12/30/16.
 */
import moment from 'moment/moment';
const setTime = (date, time)=> {
  currentDate = moment(date);
  time = time.split(':');
  currentDate.set({
    hours: time[0],
    minutes: time[1]
  });
  return currentDate.toDate()
};
const timeHelpers = {
  setTime:setTime
};
export {timeHelpers};
