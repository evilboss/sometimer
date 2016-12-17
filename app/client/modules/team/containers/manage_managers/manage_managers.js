import {useDeps, composeAll, composeWithTracker, compose} from "mantra-core";
import {domainHelpers} from "/client/utils/helpers/domain-helpers";
import ManageManagers from "/client/modules/team/components/manage_managers/manage_managers.jsx";
import Loader from "/client/utils/loader/loader";
export const composer = ({context, teamId}, onData) => {
  const {Meteor, Collections} = context();
  let subscriptionsReady = [
    Meteor.subscribe('users.allManagers', domainHelpers.getSubdomain()).ready(),
    Meteor.subscribe('team.list', domainHelpers.getSubdomain()).ready()
  ];
  const dataReady = () => {
    let team = (teamId) ? Collections.Team.findOne(teamId) : null;
    const teams = Collections.Team.find().fetch();
    const selector = (team) ? {'profile.role': 'manager', _id: team.teamLeader} : {'profile.role': 'manager'};
    let allManagers = Meteor.users.find(selector).fetch();
    onData(null, {allManagers, team, teams});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, Loader),
  useDeps(depsMapper)
)(ManageManagers);
