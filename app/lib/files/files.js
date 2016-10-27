/**
 * Created by aaron on 10/27/16.
 */
import {Files} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
const storeUrlInDatabase = (url)=> {
  check(url, String);
  const urlToSave = encodeURI(url);
  //Modules.both.checkUrlValidity(urlToSave);

  try {
    Files.insert({
      url: urlToSave,
      userId: Meteor.userId(),
      added: new Date()
    });
  } catch (exception) {
    return exception;
  }
};
export{storeUrlInDatabase};