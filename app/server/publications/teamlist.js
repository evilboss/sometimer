import {Teamlist, Projects} from "/lib/collections";
import {Meteor} from "meteor/meteor";
import {auth} from "/server/methods/auth/auth";
const fields = {'profile.displayPhoto': 1, 'profile.firstName': 1, 'profile.lastName': 1};
const hasCollaborators = (project)=> {
  return (project) ? (project.collaboratos) ? true : false : false;
};
export default function () {
  Meteor.publish('teamlist', function () {
    let stafflist = [];
    const currentUser = Meteor.users.findOne(this.userId);
    const ownerOptions = (auth.isAdmin(this.userId)) ? {} : {owner: this.userId};
    const teamList = Teamlist.find(ownerOptions).fetch();
    _.each(teamList, function (team) {
      stafflist = _.union(stafflist, team.stafflist);
    });

    const teamOptions = (auth.isAdmin(this.userId)) ? {} : {_id: {$in: stafflist}};
    console.log(ownerOptions);
    return [Teamlist.find(ownerOptions), Meteor.users.find(teamOptions, {
      fields: fields
    })];
  });

  Meteor.publish('collaborators', function (projectId) {
    const currentProject = Projects.findOne(projectId);
    const teamOptions = (auth.isAdmin(this.userId)) ? {} :(hasCollaborators(currentProject))?{_id: {$in: currentProject.collaborators}}: {_id: 'none'};
    return Meteor.users.find(teamOptions, {fields: fields});
  });
}