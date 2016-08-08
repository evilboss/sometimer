import users from './users';
import timelogs from './timelogs';
import comments from './comments';
import task from './task';

export default function () {
  users();
  timelogs();
  comments();

  task();
}
