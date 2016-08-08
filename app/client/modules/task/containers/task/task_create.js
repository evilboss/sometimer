import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TaskCreate from '../../components/task/task_create';
export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_TASK_ERROR');
  onData(null, {error});
  return clearErrors;
};
export const depsMapper = (context, actions) => ({
  create: actions.task.create,
  clearErrors: actions.task.clearErrors,
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskCreate);
