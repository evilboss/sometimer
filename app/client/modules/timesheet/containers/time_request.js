import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment/moment';
import TimeRequest from '../components/time_request.jsx';

export const composer = ({context, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approved', teamId, from, to).ready, Meteor.subscribe('timelogs.team.approval', teamId).ready, Meteor.subscribe("user.current").ready];
  const dataReady = () => {
    const approveLogs = Collections.Timelogs.find({}, {sort: {createdAt: 1}}).fetch();
    const timelogs = Collections.Timelogs.find({approved: true}, {sort: {createdAt: 1}}).fetch();
    onData(null, {timelogs, approveLogs});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  exportLogs: actions.timesheet.exportLogs,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TimeRequest);
