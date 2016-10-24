import {Teamlist, Projects, Team} from "/lib/collections";
import {Meteor} from "meteor/meteor";
import {auth} from "/server/methods/auth/auth";
const fields = {'profile.displayPhoto': 1, 'profile.firstName': 1, 'profile.lastName': 1, 'profile.jobTitle': 1};
const hasCollaborators = (project)=> {
  return (project) ? (project.collaborators) ? true : false : false;
};
export default function () {
  Meteor.publish('teamlist', function () {
    let teamOptions = (auth.isAdmin(this.userId)) ? {} : {members: {$elemMatch: {$eq: this.userId}}};
    let teamMembers = [];
    let teamList = Team.find(teamOptions).fetch();
    _.each(teamList, (team)=> {
      _.each(team.members, (members)=> {
        teamMembers.push(members);
      });
    });
    let subscriptionOptions = (teamMembers) ? {_id: {$in: teamMembers}} : auth.isAdmin(this.userId) ? {} : {none: 'none'};
    return Meteor.users.find(subscriptionOptions, {fields: fields});
  });

  Meteor.publish('collaborators', function (projectId) {
    let currentProject = Projects.findOne(projectId);
    let teamOptions = (auth.isAdmin(this.userId)) ? {} : (hasCollaborators(currentProject)) ? {_id: {$in: currentProject.collaborators}} : {_id: 'none'};
    console.log(teamOptions);
    return Meteor.users.find(teamOptions, {fields: fields});
  });
}