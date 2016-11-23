import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffDp from '../components/staff_dp.jsx';

export const composer = ({context, userId, projectId, staffType}, onData) => {
  const {Meteor, Collections} = context();
  const subsribeTo = (projectId) ? Meteor.subscribe('collaborators', projectId).ready() : Meteor.subscribe('teamlist').ready();
  const subscriptionReady = [subsribeTo];
  const dataReady = ()=> {
    const teamlist = Collections.Teamlist.find().fetch();
    const options = {_id: userId};
    const selector = (staffType) ? {'profile.role': staffType} : {};
    const staff = Meteor.users.findOne(selector, options);
    console.log(staff);
    const displayAPhoto = (staff) ? true : false;
    console.log(displayAPhoto);
    const displayPhoto = (staff) ? ( staff.profile) ? ( staff.profile.displayPhoto) ? staff.profile.displayPhoto : '' : '' : null;
    onData(null, {displayPhoto, displayAPhoto});
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
