import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment';

import StaffDetails from '../components/staff_details.jsx';

export const composer = ({context, staff, index, startDate, endDate}, onData) => {
  const {Meteor, Collections} = context();
  //const subscriptionReady = [Meteor.subscribe('timelogs.by.date', moment(new Date()).format('DD:MM:YY'), staff._id).ready];
  //console.log(Collections.Timelogs.find().fetch());
  onData(null, {staff, index});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffDetails);
