/**
 * Created by jr on 8/25/16.
 */
import {FlowRouter} from 'meteor/kadira:flow-router';
const pathFor = (path, params) => {
  let query = params && params.query ? FlowRouter._qs.parse(params.query) : {};
  return `${FlowRouter.path(path)}/${params}`;
};
const urlFor = (path, params) => {
  return Meteor.absoluteUrl(pathFor(path, params));
};
const currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};
const currentRoutes = (routes) => {
  FlowRouter.watchPathChange();
  return (_.contains(routes, FlowRouter.current().route.name)) ? 'active' : '';
};
const FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute,
  currentRoutes: currentRoutes
};

export{FlowHelpers};