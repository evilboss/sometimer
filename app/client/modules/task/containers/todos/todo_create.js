import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import TodoCreate from '../../components/todos/todo_create.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_TODO_ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.todos.create,
  clearErrors: actions.todos.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TodoCreate);
