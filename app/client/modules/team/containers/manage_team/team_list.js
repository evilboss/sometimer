import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import TeamList from '../../components/manage_team/team_list.jsx';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import Loader from '/client/utils/loader/loader';
export const composer = ({context, clientId}, onData) => {
  const {Meteor, Collections} = context();
  const subsriptionReady = [Meteor.subscribe('user.current').ready(), Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()];
  const dataReady = ()=> {
    const selector = (clientId) ? {members: clientId} : {};
    console.log(selector);
    const teamList = Collections.Team.find(selector).fetch();
    const currentUser = Meteor.user();
    const userPermissions = (Meteor.user()) ? (Meteor.user().profile) ? (Meteor.user().profile.permissions) ? Meteor.user().profile.permissions : [] : [] : [];
    onData(null, {teamList, currentUser, userPermissions});
  };
  (subsriptionReady) ? dataReady() : onData();
};
export const depsMapper = (context, actions) => ({
  context: () => context
});
export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(TeamList);