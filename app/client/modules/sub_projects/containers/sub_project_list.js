import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import SubProjectList from '../components/sub_project_list.jsx';
export const composer = ({context, projectId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('sub_projects.by.projectId', projectId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const subProjects = Collections.SubProjects.find({projectId}, options).fetch();
    onData(null, {subProjects});
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
)(SubProjectList);
