import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import ManageClients from '../../components/manage_clients/manage_clients.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allClients', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    let allManagers = Meteor.users.find({'profile.role': 'client'}).fetch();
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
)(ManageClients);
