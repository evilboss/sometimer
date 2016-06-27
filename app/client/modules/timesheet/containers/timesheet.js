import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Timesheet from '../components/timesheet.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe("timelogs",Meteor.userId()).ready){
    const timelogs = Collections.Timelogs.find().fetch();
    onData(null, {timelogs});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Timesheet);
