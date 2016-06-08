import timesheet from './timesheet';
import task from './task';
import users from './users';
import menu from './menu';

export default function () {
  timesheet();
  task();
  users();
  menu();
}
