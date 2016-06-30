import TeamInfo from '../modules/team/libs/teamInfo';
import app from './app';
Meteor.startup(function () {
  const theme = (app.theme) ? app.theme : 'default-theme';
  $('body').addClass(theme);
});