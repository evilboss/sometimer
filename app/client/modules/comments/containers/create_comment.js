import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CreateComment from '../components/create_comment.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_COMMENT_ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateComment);
