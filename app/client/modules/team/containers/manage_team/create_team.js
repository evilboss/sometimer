import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CreateTeam from '../../components/manage_team/create_team.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allstaff').ready()];
  const dataReady = ()=> {
    let team = Collections.Team;
    let allStaff = Meteor.users.find({'profile.role': 'staff'}).fetch();
    onData(null, {allStaff, team});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateTeam);
