import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Notification from '../components/notification.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.approval').ready];
  const dataReady = ()=> {
    const requestCount = Collections.Timelogs.find().count();
    onData(null, {requestCount});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Notification);
