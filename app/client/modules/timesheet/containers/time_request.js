import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TimeRequest from '../components/time_request.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.approval').ready, Meteor.subscribe("user.current").ready];
  const dataReady = ()=> {
    const timelogs = Collections.Timelogs.find({}, {sort: {date: 1}}).fetch();
    const dateArray = _.pluck(timelogs, 'date');
    const timeRequest = [];
    _.each(dateArray, (date)=> {
      const logs = _.where(timelogs, {date: date});
      const loglistObject = {date: date, logs: logs};
      timeRequest.push(loglistObject);
    });
    onData(null, {timeRequest});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TimeRequest);
