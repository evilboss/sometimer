import {Download} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'download.csv'() {
      console.log('Generatign CSV');
      var collection = [{timeIn:5,timeout:5,total:30}];
      var heading = true; // Optional, defaults to true
      var delimiter = ";" // Optional, defaults to ",";
      return exportcsv.exportToCSV(collection, heading, delimiter);

    }
  });
}
