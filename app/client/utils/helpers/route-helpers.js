/**
 * Created by jr on 8/25/16.
 */
const pathFor = (path, params) => {
  let query = params && params.query ? FlowRouter._qs.parse(params.query) : {};
  return FlowRouter.path(path, params, query);
};
const urlFor = (path, params) => {
  return Meteor.absoluteUrl(pathFor(path, params));
};
const currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};
export default FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};