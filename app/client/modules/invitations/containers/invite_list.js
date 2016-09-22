import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InviteList from '../components/invite_list.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  onData(null, {});
};
export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InviteList);
