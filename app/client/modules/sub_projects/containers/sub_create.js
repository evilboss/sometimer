import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import SubCreate from '../components/sub_create.jsx';
export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const subsriptionReady = [Meteor.subscribe('user.current').ready()];
  const dataReady = ()=> {
    const error = LocalState.get('CREATE_SUBPROJECT_ERROR');
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    console.log(userPermissions);
    onData(null, {error, userPermissions});
  };
  (subsriptionReady) ? dataReady() : onData();
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
