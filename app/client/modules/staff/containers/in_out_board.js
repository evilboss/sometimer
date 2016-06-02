import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InOutBoard from '../components/in_out_board.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe("user.current").ready){
    const currentUser = Meteor.user();
    onData(null, {currentUser});
  }
};
export const depsMapper = (context, actions) => ({
  status_change:actions.staff.status_change,
  context: () => context
});
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InOutBoard);