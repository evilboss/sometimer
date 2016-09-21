import React from 'react';
import {mount} from 'react-mounter';


import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Foot from '../core/components/footer.jsx';
import Header from '../core/containers/header';
import {Footer} from '../core/components';
import {dashboardRoutes} from '/client/modules/dashboard/routes'
import InviteList from './containers/invite_list';
import Invitee from './containers/invitee';
import PublicLayout from '/client/modules/core/components/public_layout';

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
  dashboardRoutes.route('/invites', {
    name: 'dashboard.inviteList',
    action(params){
      mount(MainLayoutCtx, {
        title: 'Break Logs: ' + DocHead.getTitle(),
        head: () => (<Header/>),
        content: ()=>(<InviteList/>),
        footer: ()=>(<Foot/>)
      });
    }
  });
  FlowRouter.route('/invite/:token', {
    name: 'invite.activate',
    action(params){
      console.log('this is invite route', params.token);
      mount(MainLayoutCtx, {
        content: ()=>(<Invitee />),
      });
    }
  });
}
