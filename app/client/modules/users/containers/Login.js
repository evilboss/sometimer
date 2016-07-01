import Login from '../components/Login.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const err = LocalState.get('LOGIN_ERROR');
  onData(null, {err});
};

export const depsMapper = (context, actions) => ({
  submitAction: actions.users.login,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
