import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AddProjects from '../components/add_projects.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const projects = Collections.Projects;
  onData(null, {projects});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddProjects);
