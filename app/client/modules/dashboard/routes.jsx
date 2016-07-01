import React from 'react';
import {mount} from 'react-mounter';
import DashboardHeader from './components/dashboard_header';
import Foot from '../core/components/footer.jsx';
import Dashboard from './containers/dashboard';
import {accessControl} from '/lib/access-control/access-control';


import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const dashboardRoutes = FlowRouter.group({
    prefix: "/dashboard"
  });
  dashboardRoutes.route('/', {
    name: 'dashboard',
    triggersEnter: [function (context, redirect) {
      accessControl.isLoggedIn('dashboard', redirect);
    }],
    action() {
      mount(MainLayoutCtx,
        {head: () => (<DashboardHeader />), content: ()=>(<Dashboard />), footer: ()=>(<Foot/>)}
      );
    }
  });
  dashboardRoutes.route('/:testId', {
    name: 'dashboard.test',
    action() {
      let projectId = FlowRouter.getParam('testId');
      FlowRouter.go('/notFound');
    }
  });
}
