import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InviteList from '../components/invite_list.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('CREATE_INVITE_ERROR');
  onData(null, {});

};

export const depsMapper = (context, actions) => ({
  create: actions.invites.create,
  clearErrors: actions.invites.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InviteList);
