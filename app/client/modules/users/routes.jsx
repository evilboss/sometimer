import React from 'react';
import {mount} from 'react-mounter';
import PublicLayout from '../core/components/public_layout.jsx';
import {Register, Login, RecoverPassword, ResetPassword, EmailVerification, UserSearch, Profile} from './containers';

export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(PublicLayout);
  FlowRouter.route('/login', {
    name: 'user.login', action() {
      mount(PublicLayoutCtx, {
        title: 'Login: ' + DocHead.getTitle(),
        content: () => (<Login />),
      });
    }
  });
 
}

