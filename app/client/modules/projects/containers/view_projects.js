import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ViewProjects from '../components/view_projects.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('project-list').ready()) {
    const projects = Collections.Projects.find().fetch();
    onData(null, {projects});
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
)(ViewProjects);
