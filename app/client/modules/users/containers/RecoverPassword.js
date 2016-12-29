import RecoverPassword from '../components/RecoverPassword.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const err = LocalState.get('EMAIL_ERROR');
  onData(null, {err});
};

export const depsMapper = (context, actions) => ({
  recoverPassword: actions.users.recoverPassword,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RecoverPassword);
