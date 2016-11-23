import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Loader from '/client/utils/loader/loader';
import ManageStaff from '../../components/manage_staff/manage_staff.jsx';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [Meteor.subscribe('users.allStaff', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    const team = (teamId) ? Collections.Team.findOne(teamId) : null;
    console.log(team);
    const selector = (team) ? {'profile.role': 'staff', _id: {$in: team.members}} : {'profile.role': 'staff'};
    let allStaff = Meteor.users.find(selector).fetch();
    let teams = Collections.Team.find().fetch();
    onData(null, {allStaff, teams});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(ManageStaff);
