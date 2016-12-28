/**
 * Created by evilQueen on 11/2/16.
 */
const processUrl = (url)=> {
  let parts = url.split('.');
  let sub = ( parts[0] == 'www') ? parts[1] : parts[0];
  let domain = (parts.length < 2) ? parts[1] : parts[2];
  return (parts.length != 1) ? sub : '';
};
const getSubdomain = ()=> {
  let url = window.location.hostname;
  return (url) ? processUrl(url) : '';

};
const addSubdomain = (subDomain) => {
  let baseUrl = Meteor.absoluteUrl();
  let urlParts = baseUrl.split('//');
  let hasWeb = urlParts[1].includes('www.');
  let completeURL = urlParts[1].replace('www.', '');
  return `${urlParts[0]}//${(hasWeb) ? 'www.' : ''}${subDomain}.${completeURL}`;
};

const domainHelpers = {
  getSubdomain: getSubdomain,
  addSubdomain: addSubdomain
};
export {domainHelpers};