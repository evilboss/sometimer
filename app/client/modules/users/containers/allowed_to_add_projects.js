import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AllowedToAddProjects from '../components/allowed_to_add_projects.jsx';
import TaskCreate from '/client/modules/task/containers/task/task_create';
export const composer = ({context,userId,projectId}, onData) => {
  const {Meteor, Collections} = context();
  Meteor.subscribe('user.name.by.id', userId, () => {
    const user = Meteor.users.findOne(userId);
    onData(null, {user,projectId});
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
)(AllowedToAddProjects);
