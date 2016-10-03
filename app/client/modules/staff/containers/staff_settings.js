import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StaffSettings from '../components/staff_settings.jsx';
export const composer = ({context, staffId}, onData) => {
	const {Meteor, Collections} = context();
	onData(null, {staffId});
};

export const depsMapper = (context, actions) => ({
	context: () => context
});

export default composeAll(
	composeWithTracker(composer),
	useDeps(depsMapper)
)(StaffSettings);
