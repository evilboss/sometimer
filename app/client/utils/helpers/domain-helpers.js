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
const domainHelpers = {
  getSubdomain: getSubdomain
};
export {domainHelpers};