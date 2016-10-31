import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Settings from '../components/settings.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('settings').ready()];

  const dataReady =()=>{
    let settings = Collections.Settings.findOne();
    let sitePhoto = (settings) ? (settings.url) ? settings.url : '' : '';
    onData(null, {sitePhoto});

  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Settings);
