import {Teamlist} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
      'teamlist.insert'(owner, stafflist) {
        const existing = Teamlist.findOne({owner, owner});
        const update = ()=> {
          Teamlist.update({_id: existing._id}, {
            $set: {
              stafflist: stafflist
            }
          });
        };
        const insert = ()=> {
          console.log('Creating new Teamlist for selected user');
          const teamlist = {
            owner: owner,
            stafflist: stafflist
          }
          Teamlist.insert(teamlist);
        }
        (existing) ? update() : insert();
      }
    }
  )
  ;
}
