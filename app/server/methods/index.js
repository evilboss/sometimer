import users from './users';
import timelogs from './timelogs';
import comments from './comments';
import task from './task';
import timesheetDates from './timesheet_dates';

export default function () {
  users();
  timelogs();
  comments();
  task();
  timesheetDates();
}
