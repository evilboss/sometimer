import {Teamlist} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
	Meteor.methods({
		'teamlist.insert'(owner, stafflist) {
			const existing = Teamlist.findOne({owner, owner});
			if (existing) {
				console.log('updating existing stafflist');
				Teamlist.update({_id: existing_.id}, {
					$set: {
						stafflist: stafflist
					}
				});
			} else {
				console.log('Creating new Teamlist for selected user');
				const teamlist = {
					owner: owner,
					stafflist: stafflist
				}
				Teamlist.insert(teamlist);
			}
			
		}
	});
}
