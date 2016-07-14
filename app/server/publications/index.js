import timesheet from './timesheet';
import task from './task';
import users from './users';
import menu from './menu';
import team from './team';
import timelogs from './timelogs';
import images from './images';
export default function () {
  timesheet();
  task();
  users();
  menu();
  team();
  timelogs();
  images();
}
