import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import StaffMultiSelect from '../components/staff_multi_select.jsx';
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionReady = [Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    const options = {_id: {$ne: Meteor.userId()}};
    const staffList = Meteor.users.find(options).fetch();
    onData(null, {staffList});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffMultiSelect);
