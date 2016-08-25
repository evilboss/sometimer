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

function buildDomain(sub, url) {
  var domain;
  let protocol;
  let port;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
    protocol = url.split('/')[0];
  }
  else {
    domain = url.split('/')[0];
  }

  //find & remove port number
  port = domain.split(':')[1];
  domain = domain.split(':')[0];



  let newUrl = protocol + '//' + sub + '.' + domain
  if (port) {
    newUrl = newUrl + ':' + port;
  }
  return newUrl;
}

function getTeamInfo() {
  if (Meteor.subscribe('team.current', getSubdomain()).ready) {
    return (Team.find().count()) ? Team.find().fetch() : null;
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
function generatePlatform(subdomain, url) {
  return buildDomain(subdomain, url);
}

const TeamInfo = {
  test: ()=>'test',
  getTeamDomain: () =>getSubdomain(),
  getTeamInfo: ()=>getTeamInfo(),
  generatePlatform: (subdomain, url)=>generatePlatform(subdomain, url)

};
export {TeamInfo};
