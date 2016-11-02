import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ManageStaff from '../../components/manage_staff/manage_staff.jsx';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allstaff', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    let allStaff = Meteor.users.find({'profile.role': 'staff'}).fetch();
    let teams = Collections.Team.find().fetch();
    onData(null, {allStaff, teams});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ManageStaff);
