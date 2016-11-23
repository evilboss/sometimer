import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import Loader from '/client/utils/loader/loader';
import ManageClients from '../../components/manage_clients/manage_clients.jsx';
export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allClients', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    const team = (teamId) ? Collections.Team.findOne(teamId) : null;
    const selector = (team) ? {'profile.role': 'client', _id: {$in: team.members}} : {'profile.role': 'client'};
    let allClients = Meteor.users.find(selector).fetch();
    console.log(allClients);
    onData(null, {allClients});
  };
  (subscriptionsReady) ? dataReady() : onData();
};
export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(ManageClients);
