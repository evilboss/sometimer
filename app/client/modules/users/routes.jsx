import React from 'react';
import {mount} from 'react-mounter';
import PublicLayout from '../core/components/public_layout.jsx';
import {
  Register,
  Login,
  UserTeamDomain,
  RecoverPassword,
  ResetPassword,
  EmailVerification,
  UserSearch,
  Profile
} from './containers';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(PublicLayout);
  FlowRouter.route('/login', {

    name: 'user.login',
    triggersEnter: [(context, redirect)=> {
      (domainHelpers.getSubdomain() == '' || domainHelpers.getSubdomain() == 'remotiv') ? redirect('/team/signin') : '';
    }],
    action() {
      mount(PublicLayoutCtx, {
        content: () => (<Login />),
      });
    }
  });
  FlowRouter.route('/team/signin', {
    name: 'user.team.login', action() {
      mount(PublicLayoutCtx, {
        content: () => (<UserTeamDomain />),
      });
    }
  });
  FlowRouter.route('/forgotPassword', {
    name: 'user.forgotPassword', action() {
      mount(PublicLayoutCtx, {
        content: () => (<RecoverPassword />),
      });
    }
  });
  FlowRouter.route('/resetPassword/:token', {
    name: 'user.resetPassword',
    action(params){
      mount(PublicLayoutCtx, {
        content: ()=>(<ResetPassword/>),
      });
    }
  });
}

