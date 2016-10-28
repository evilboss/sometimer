import users from './users';
import timelogs from './timelogs';
import comments from './comments';
import task from './task';
import timesheetDates from './timesheet_dates';
import invitations from './invitations';
import projects from './projects';
import teamlist from './teamlist';
import subProjects from './sub_projects';
import todos from './todos';
import team from './team';
import download from './download';

export default function () {
  users();
  timelogs();
  comments();
  task();
  timesheetDates();
  invitations();
  projects();
  teamlist();
  subProjects();
  todos();
  team();
  download();
}
