import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProjectView from '../components/project_view.jsx';

export const composer = ({context, projectId}, onData) => {
  const {Meteor, Collections} = context();
  const subsriptionReady = [Meteor.subscribe('project.single', projectId).ready(), Meteor.subscribe('collaborators', projectId).ready()];
  const dataReady = ()=> {
    const project = Collections.Projects.findOne(projectId);
    onData(null, {project});
  };
  const projectFromCache = Tracker.nonreactive(() => {
    return Collections.Projects.findOne(projectId);
  });
  (subsriptionReady) ? (projectFromCache) ? onData(null, {project: projectFromCache}) : dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectView);
