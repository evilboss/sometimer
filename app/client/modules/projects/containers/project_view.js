import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProjectView from '../components/project_view.jsx';

export const composer = ({context, projectId}, onData) => {
  const {Meteor, Collections} = context();
  const subsriptionReady = [Meteor.subscribe('project.single', projectId).ready(), Meteor.subscribe('collaborators', projectId).ready(), Meteor.subscribe('user.current').ready()];
  const dataReady = ()=> {
    const project = Collections.Projects.findOne(projectId);
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];

    onData(null, {project, userPermissions});
  };
  (subsriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectView);
