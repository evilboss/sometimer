import {Teamlist, Projects} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
  Meteor.publish('teamlist', function () {
    let stafflist = [];
    const ownerOptions = {owner: this.userId};
    const teamList = Teamlist.find(ownerOptions).fetch();
    _.each(teamList, function (team) {
      stafflist = _.union(stafflist, team.stafflist);
    });
    const currentUser = Meteor.users.findOne(this.userId);
    const teamOptions =
      (currentUser) ?
        (currentUser.profile) ?
          (currentUser.profile.role == 'admin') ? {}
            : {_id: {$in: stafflist}}
          : {_id: {$in: stafflist}}
        : {_id: {$in: stafflist}};

    return [Teamlist.find(ownerOptions), Meteor.users.find(teamOptions, {
      fields: {
        createdAt: false,
        emails: false,
        services: false,
        'profile.role': false,
      }
    })];
  });

  Meteor.publish('collaborators', function (projectId) {
    const currentProject = Projects.findOne(projectId);
    const currentUser = Meteor.users.findOne(this.userId);
    const teamOptions =
      (currentUser) ?
        (currentUser.profile) ?
          (currentUser.profile.role == 'admin') ? {}
            : {_id: {$in: currentProject.collaborators}}
          : {_id: {$in: currentProject.collaborators}}
        : {_id: {$in: currentProject.collaborators}};
    const fields = {
      createdAt: false,
      emails: false,
      services: false,
      'profile.role': false,
      'profile.staffType': false,
      'profile.jobTitle': false,
    };
    return Meteor.users.find(teamOptions, {fields: {fields}});
  });
}