import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DisplayManager from '../components/display_manager.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('teamlist').ready()];
  const dataReady = ()=> {
    const options = {_id: userId};
    let teamLeader = (Meteor.users.findOne(options)) ? (Meteor.users.findOne(options).profile) ? Meteor.users.findOne(options).profile : {} : {};
    onData(null, {teamLeader});
  };
  (subscriptionsReady) ? dataReady() : onData();

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DisplayManager);
