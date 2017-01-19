import {File, Settings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {remotivUser} from './user/remotiv_user';
export default function () {
  Meteor.methods({
    'updateDisplayPhoto'(url){
      check(url, String);
      const urlToSave = encodeURI(url);
      try {
        remotivUser.update(this.userId, 'profile.displayPhoto', urlToSave);
      } catch (exception) {
        return exception;
      }
    },
    'updateSitePhoto'(url){
      check(url, String);
      const urlToSave = encodeURI(url);
      try {
        const siteSettings = Settings.findOne();
        Settings.update({_id: siteSettings._id}, {$set: {url: urlToSave}})
      } catch (exception) {
        return exception;
      }
    }

  });
};