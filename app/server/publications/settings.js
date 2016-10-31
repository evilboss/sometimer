import {Settings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('settings', function (settingsId) {
    return Settings.find();
  });
}
