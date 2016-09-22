import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Invite from '../components/invite.jsx';

export const composer = ({context,inviteId}, onData) => {
  const {Meteor, Collections} = context();
  console.log(inviteId);
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Invite);
