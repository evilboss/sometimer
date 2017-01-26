import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
  Meteor.methods({
    'team.insert'(team) {
      let createdTeam = Team.insert(team);
      return createdTeam;
    },
    'team.update'(id, team){
      Team.update(id, {$set: team});
    },
    'team.remove'(teamId) {
      Team.remove({_id: teamId});
    },
    'team.assign'(teamId, userId){
      //TODO: get team leaders. good time to refactor to new method temporary fix so will not be broken
      Team.update(teamId, {$set: {teamLeader: [userId]}});
    }
  });
}
