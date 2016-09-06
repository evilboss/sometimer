import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TodoList from '../../components/todos/todo_list.jsx';
export const composer = ({context, taskId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('todos.projectId', taskId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const todoList = Collections.Todos.find({taskId}, options).fetch();
    onData(null, {todoList});
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
)(TodoList);
