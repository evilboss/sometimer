/**
 * Created by jr on 9/19/16.
 */
import {Accounts} from 'meteor/accounts-base';

Mailer.config({
  from: 'Remotiv Notifications<notifications@remotiv.io>',
  replyTo: 'Remotiv Notifications <notifications@remotiv.io>',
  addRoutes: true,
  plainTextOpts: {
    ignoreImage: false
  },
  baseUrl: process.env.ROOT_URL,
  testEmail: 'aaron@bosstechlabs.com',
});
process.env.MAIL_URL = "smtp://notifications%40remotiv.io:DP%40bwt,57n2qup@secure.emailsrvr.com:465";

Meteor.startup(function () {
  Mailer.init({
    templates: Templates,     // Global Templates namespace, see lib/templates.js.
    helpers: TemplateHelpers, // Global template helper namespace.
    layout: {
      name: 'emailLayout',
      path: 'layout.html',   // Relative to 'private' dir.
      scss: 'layout.scss'
    },
    data: {
      name: 'Aaron',
    }
  });
});