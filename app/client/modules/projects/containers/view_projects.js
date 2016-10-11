import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import ViewProjects from '../components/view_projects.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subsriptionReady = [Meteor.subscribe('project-list').ready(), Meteor.subscribe('user.current').ready()];

  const dataReady = ()=> {
    const projects = Collections.Projects.find().fetch();
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    onData(null, {projects, userPermissions});
  };
  (subsriptionReady) ? dataReady() : onData();

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ViewProjects);
