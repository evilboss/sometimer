import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Foot from '../core/components/footer.jsx';
import Header from '../core/containers/header';
import {Footer} from '../core/components';

import {dashboardRoutes} from '/client/modules/dashboard/routes'
import InviteList from './containers/invite_list';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/invite', {
    name: 'dashboard.invites',
    action(){
      console.log('loading invites');
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<InviteList />), footer: () => (<Footer />)
      });
    }
  });
  FlowRouter.route('/invite/:token', {
    name: 'invite.activate',
    action(token){
      console.log(token);
    }
  });
}
