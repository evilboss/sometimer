/**
 * Created by jr on 6/7/16.
 */
import {Team} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

function extractDomain(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  }
  else {
    domain = url.split('/')[0];
  }

  //find & remove port number
  domain = domain.split(':')[0];

  return domain;
}

function getTeamInfo() {
  if (Meteor.subscribe('teams.current',getSubdomain() ).ready) {
    console.log(Team.find().fetch());
    return (Team.find().count())?Teams.find().fetch():null;
  }
}
function getSubdomain() {
  let url = window.location.hostname;
  if (url) {
    let parts = url.split('.');
    let sub = parts[0];
    let domain = parts[1];
    return (parts.length != 1) ? sub : '';
  }
}

const TeamInfo = {
  test: ()=>'test',
  getTeamDomain: () =>getSubdomain(),
  getTeamInfo:()=>getTeamInfo()

};
export {TeamInfo};
