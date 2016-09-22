import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import SubCreate from '../components/sub_create.jsx';
export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_SUBPROJECT_ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.subProjects.create,
  clearErrors: actions.subProjects.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SubCreate);
