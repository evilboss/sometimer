import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import ManageAdmins from '/client/modules/team/components/manage_admins/manage_admins.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allAdmins', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    let allAdmins = Meteor.users.find({'profile.role': 'admin'}).fetch();
    console.log(allAdmins);
    onData(null, {allAdmins});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ManageAdmins);
