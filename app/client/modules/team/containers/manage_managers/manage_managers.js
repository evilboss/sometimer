import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import ManageManagers from '/client/modules/team/components/manage_managers/manage_managers.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allManagers', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    let allManagers = Meteor.users.find({'profile.role': 'manager'}).fetch();
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
