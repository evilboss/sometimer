/**
 * Created by jr on 5/16/16.
 */
import {Meteor} from 'meteor/meteor';
Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',

});
