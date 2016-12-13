import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import StaffSettings from '../components/staff_settings.jsx';
import Loader from '/client/utils/loader/loader';


export const composer = ({context, staffId, teamId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [
    Meteor.subscribe('user.current').ready(),
    Meteor.subscribe('user.name.by.id', staffId).ready(),
    Meteor.subscribe('project-list', domainHelpers.getSubdomain()).ready()
  ];
  const dataReady = () => {
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    const user = Meteor.users.findOne(staffId);
    const team = Collections.Team.findOne(teamId);
    const projectSelector = {collaborators: {$all: [staffId]}};
    const projects = Collections.Projects.find(projectSelector).fetch();
    const permissions = (user) ? (user.profile) ? (user.profile.permissions) ? user.profile.permissions : [] : [] : [];
    onData(null, {staffId, teamId, team, userPermissions, user, permissions, projects});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  removeStaff: actions.staff_actions.removeStaff,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(StaffSettings);
