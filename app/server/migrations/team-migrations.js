/**
 * Created by jr on 6/8/16.
 */
import {Team} from '/lib/collections';
const teamlist = ['protos', 'ezyva'];
export function loadTeams() {
	console.log('Loading Teams');
	if (Team.find({}).count() === 0) {
		_.each(teamlist, function (team) {
			Team.insert({name: team});
			
		});
	}
}
export function removeAllTeams() {
	_.each(teamlist, function (team) {
		const teamToRemove = Team.findOne({name:team});
    if(teamToRemove){
      Team.remove(teamToRemove._id);
    }
	});
}
