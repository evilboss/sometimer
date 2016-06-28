import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffInfo from '../components/staff_info.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe("user.current").ready){
    const currentUser = Meteor.user();
    onData(null, {currentUser});
  }
};
export const depsMapper = (context, actions) => ({
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StaffInfo);
