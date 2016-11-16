import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import ManageManagers from '/client/modules/team/components/manage_managers/manage_managers.jsx';

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allManagers', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    console.log(teamId);
    const team = (teamId) ? Collections.Team.findOne(teamId) : null;
    console.log(team);
    const selector = (team) ? {'profile.role': 'manager', _id: {$in: team.members}} : {'profile.role': 'manager'};

    let allManagers = Meteor.users.find(selector).fetch();
    console.log(allManagers);
    onData(null, {allManagers});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ManageManagers);
