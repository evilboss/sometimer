import users from './users';
import timelogs from './timelogs';
import comments from './comments';
import task from './task';
import timesheetDates from './timesheet_dates';
import invitations from './invitations';
import projects from './projects';
import teamlist from './teamlist';
import subProjects from './sub_projects';

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
}
