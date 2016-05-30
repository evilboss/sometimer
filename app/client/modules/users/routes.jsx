import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '../core/components/app_layout.jsx';
import {Header, Footer} from '../core/components';
import {Register, Login, RecoverPassword, ResetPassword, EmailVerification, UserSearch, Profile} from './containers';

export default function (injectDeps, {FlowRouter}) {

  const AppLayoutCtx = injectDeps(AppLayout);

  FlowRouter.route('/login', {
    name: 'user.login', action() {
      mount(AppLayoutCtx, {
        content: () => (<Login />),
        title: 'Login: ' + DocHead.getTitle()
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'users.profile', action() {
      mount(AppLayoutCtx, {
        head: () => (<Header />), content: () => (<Profile />), footer: () => (<Footer />)
      });
    }
  });

  /* FlowRouter.route('/users', {
   name: 'users.list', action() {
   mount(AppLayout, {
   content: () => (<UserSearch />)
   });
   }
   });




   FlowRouter.route('/register', {
   name: 'user.register', action() {
   mount(AppLayout, {
   content: () => (<Register />)
   });
   }
   });

   FlowRouter.route('/recover-password', {
   name: 'user.recover_password', action() {
   mount(AppLayout, {
   content: () => (<RecoverPassword />)
   });
   }
   });

   FlowRouter.route('/reset-password/:token', {
   name: 'users.reset_password',
   action({token}) {
   mount(AppLayout, {
   content: () => (<ResetPassword token={token}/>)
   });
   }
   });

   FlowRouter.route('/email-verification', {
   name: 'users.email_verification', action() {
   mount(AppLayout, {
   content: () => (<EmailVerification />)
   });
   }
   });

   FlowRouter.route('/email-verification/:token', {
   name: 'users.reset_password_with_token',
   action({token}) {
   mount(AppLayout, {
   content: () => (<EmailVerification token={token}/>)
   });
   }
   });*/
}
