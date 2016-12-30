import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment/moment';
import TimeRequest from '../components/time_request.jsx';

export const composer = ({context, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approval', teamId, from, to).ready, Meteor.subscribe("user.current").ready];
  const dataReady = ()=> {
    const timelogs = Collections.Timelogs.find({}, {sort: {createdAt: 1}}).fetch();
    onData(null, {timelogs});
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
