import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {FlowHelpers} from '/client/utils/helpers/route-helpers';

import Tabs from '../components/tabs.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subsriptionReady = [Meteor.subscribe('user.current').ready()];
  const dataReady = ()=> {
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    onData(null, {userPermissions,FlowHelpers});
  };
  (subsriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Tabs);
