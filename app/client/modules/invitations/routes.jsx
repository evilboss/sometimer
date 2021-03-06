import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Foot from '../core/components/footer.jsx';
import Header from '../core/containers/header';
import {Footer} from '../core/components';
import {dashboardRoutes} from '/client/modules/dashboard/routes'
import InviteList from './containers/invite_list';
import Invitee from './containers/invitee';
import Invite from './containers/invite';
import Activate from './containers/activate';


import PublicLayout from '/client/modules/core/components/public_layout';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const PublicLayoutCtx = injectDeps(PublicLayout);
  dashboardRoutes.route('/invite', {
    name: 'dashboard.invites',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<InviteList />), footer: () => (<Footer />)
      });
    }
  });
  dashboardRoutes.route('/invites', {
    name: 'dashboard.inviteList',
    action(){
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
      mount(PublicLayoutCtx, {
        content: ()=>(<Invite token={params.token}/>),
      });
    }
  });
  FlowRouter.route('/invite/activate/:inviteId', {
    name: 'user.activate',
    action(params) {
      mount(PublicLayoutCtx, {
        content: () => (<Activate inviteId={params.inviteId}/>),
      });
    }
  });
}