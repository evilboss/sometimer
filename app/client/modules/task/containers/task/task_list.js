import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../../components/task/task_list.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('task').ready()) {

    const task = Collections.Task.find().fetch();
    onData(null, {task});
  } else {
    onData();
  }
};
export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList);
