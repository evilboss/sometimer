import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SiteList from '../components/site_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe("user.current").ready];
  const dataReady = ()=> {
    const currentUser = Meteor.user();
    onData(null, {currentUser});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SiteList);
