import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProjectQuickView from '../components/project_quick_view.jsx';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const dataReady = ()=> {
    const projects = Collections.Projects.find().fetch();
    onData(null, {projects});
  };
  const susbriptionsReady = [Meteor.subscribe('project-list', domainHelpers.getSubdomain()).ready()];
  (susbriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProjectQuickView);
