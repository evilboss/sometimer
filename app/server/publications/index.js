import timesheet from './timesheet';
import task from './task';
import users from './users';
import menu from './menu';
import team from './team';
import timelogs from './timelogs';
import projects from './projects';
import images from './images';
import comments from './comment-publications';
import teamlist from './teamlist';

export default function () {
  timesheet();
  task();
  users();
  menu();
  team();
  timelogs();
  images();
  projects();
  comments();
  teamlist();
}
