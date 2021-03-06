import {useDeps, composeAll, composeWithTracker, compose} from "mantra-core";
import PermissionForm from "../components/permission_form.jsx";

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  updatePermissions: actions.staff_actions.updatePermissions,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PermissionForm);
