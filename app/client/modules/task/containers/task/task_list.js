import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../../components/task/task_list.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const taskHandle = Meteor.subscribe('task');
  let Task = Collections.Task;
  onData(null, {Task});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
