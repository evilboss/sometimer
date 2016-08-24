import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StartTaskButton from '../components/start_task_button.jsx';

export const composer = ({context,userId}, onData) => {
  const {Meteor, Collections} = context();
  Meteor.subscribe('user.name.by.id', userId, () => {
    const user = Meteor.users.findOne(userId);
    onData(null, {user});
  });
  const userFromCache = Tracker.nonreactive(() => {
    return Meteor.users.findOne(userId);
  });

  if (userFromCache) {
    onData(null, {user: userFromCache});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StartTaskButton);
