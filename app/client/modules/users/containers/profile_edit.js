import {useDeps, composeAll, composeWithTracker, compose} from "mantra-core";
import ProfileEdit from "../components/profile_edit.jsx";

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe("user.current").ready) {
    const user = Meteor.user();
    const image = Collections.Images;
    const users = Meteor.users;
    onData(null, {user, users, image});
  }
};

export const depsMapper = (context, actions) => ({
    submitAction: actions.users.change_password,
    profileUpdate: actions.staff_actions.profileUpdate,
    context: () => context
  })
  ;

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProfileEdit);
