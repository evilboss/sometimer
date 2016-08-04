import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProjectView from '../components/project_view.jsx';

export const composer = ({context, projectId}, onData) => {
  const {Meteor, Collections} = context();
  console.log('composer',projectId);
  Meteor.subscribe('project.single', projectId, () => {
    const project = Collections.Projects.findOne(projectId);
    onData(null, {project});
  });
  const projectFromCache = Tracker.nonreactive(() => {
    return Collections.Projects.findOne(projectId);
  });

  if (projectFromCache) {
    onData(null, {project: projectFromCache});
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
)(ProjectView);
