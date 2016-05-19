import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskCreate from '../../components/task/task_create';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const task = Collections.Task;
  onData(null, {task});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskCreate);
