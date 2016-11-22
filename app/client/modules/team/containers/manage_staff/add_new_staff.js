import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import AddNewStaff from '../../components/manage_staff/add_new_staff.jsx';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subsriptionReady = [Meteor.subscribe('user.current').ready(), Meteor.subscribe('users.allStaff', domainHelpers.getSubdomain()).ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    let userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    let userRole = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.role) ? Meteor.user().profile.role : '' : '' : '';
    const team = (teamId) ? Collections.Team.findOne(teamId) : null;
    const selector = (team) ? {'profile.role': 'staff', _id: {$in: team.members}} : {'profile.role': 'staff'};
    let allStaff = Meteor.users.find(selector).fetch();
    let teams = Collections.Team.find().fetch();
    console.log(userRole);
    onData(null, {userPermissions, userRole, allStaff, teams});
  };
  (subsriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  create: actions.staff.create,
  add: actions.team_actions.add,
  clearErrors: actions.staff.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddNewStaff);
