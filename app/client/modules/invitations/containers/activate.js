import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Activate from '../components/activate.jsx';

export const composer = ({context, inviteId}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Activate);
