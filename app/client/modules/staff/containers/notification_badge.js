import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NotificationBadge from '../components/notification_badge.jsx';

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approval', teamId).ready, Meteor.subscribe("user.current").ready];
  const dataReady = () => {
    const approveLogs = Collections.Timelogs.find({approved: {$exists: false}}, {sort: {createdAt: 1}}).count();
    onData(null, {approveLogs});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NotificationBadge);
