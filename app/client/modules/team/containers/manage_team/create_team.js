import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

import CreateTeam from '../../components/manage_team/create_team.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allManagers', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    let team = Collections.Team;
    let selector = {'profile.role': 'manager'};
    let allManagers = Meteor.users.find(selector).fetch();
    onData(null, {allManagers, team});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateTeam);
