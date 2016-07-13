import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProfileEdit from '../components/profile_edit.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe("user.current").ready) {
    const user = Meteor.user();
    const users = Meteor.users;
    console.log(Meteor.user());
    onData(null, {user, users});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProfileEdit);
