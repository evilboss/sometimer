import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TaskList from '../../components/task/task_list.jsx';
export const composer = ({context, projectId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('task.projects', projectId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const tasks = Collections.Task.find({projectId}, options).fetch();
    onData(null, {tasks});
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
