import {useDeps, composeAll, composeWithTracker, compose} from "mantra-core";
import {domainHelpers} from "/client/utils/helpers/domain-helpers";
import Loader from "/client/utils/loader/loader";
import ManageClients from "../../components/manage_clients/manage_clients.jsx";
export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allClients', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = () => {
    const team = (teamId) ? Collections.Team.findOne(teamId) : null;
    /*
     todo: filter all clients in a team
     */
    const selector = (team) ? {
      'profile.role': 'client',
      _id: (team.members) ? {$in: team.members} : 'not-finding-anything'
    } : {'profile.role': 'client'};
    let allClients = Meteor.users.find(selector).fetch();


    onData(null, {allClients, team});
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
