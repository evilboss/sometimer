import {File} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {remotivUser} from './user/remotiv_user';
export default function () {
  Meteor.methods({
    'updateDisplayPhoto'(url){
      check(url, String);
      const urlToSave = encodeURI(url);
      //Modules.both.checkUrlValidity(urlToSave);

      try {
        remotivUser.update(this.userId, 'profile.displayPhoto', urlToSave);
      } catch (exception) {
        return exception;
      }

    },
    'updateSitePhoto'(url){
      check(url, String);
      const urlToSave = encodeURI(url);
    }

  });
};
// Meteor.methods({
//   storeUrlInDatabase: function (url) {
//     check(url, String);
//     const urlToSave = encodeURI(url);
//     //Modules.both.checkUrlValidity(urlToSave);
//
//     try {
//       Files.insert({
//         url: urlToSave,
//         userId: Meteor.userId(),
//         added: new Date()
//       });
//     } catch (exception) {
//       return exception;
//     }
//   }
// });
