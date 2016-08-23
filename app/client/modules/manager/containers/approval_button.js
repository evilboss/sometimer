import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ApprovalButton from '../components/approval_button.jsx';

export const composer = ({context, timelogId}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {timelogId});
};

export const depsMapper = (context, actions) => ({
  approveTimelog: actions.timeLogApproval.approveTimelog,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ApprovalButton);
