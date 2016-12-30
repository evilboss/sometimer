import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import StaffDp from '../components/staff_dp.jsx';

export const composer = ({context, userId, projectId, staffType}, onData) => {
  const {Meteor, Collections} = context();
  const subsribeTo = Meteor.subscribe('users.all', domainHelpers.getSubdomain()).ready();
  const subscriptionReady = [subsribeTo];
  const dataReady = ()=> {
    const staff = Meteor.users.findOne(userId);
    const displayAPhoto = (staff) ? true : false;
    const displayName =(staff) ? ( staff.profile) ? ( staff.profile.firstName) ? staff.profile.firstName : '' : '' : null;
    const displayPhoto = (staff) ? ( staff.profile) ? ( staff.profile.displayPhoto) ? staff.profile.displayPhoto : '' : '' : null;
    onData(null, {displayPhoto,displayName, displayAPhoto});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffDp);
