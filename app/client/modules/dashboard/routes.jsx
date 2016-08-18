import React from 'react';
import {mount} from 'react-mounter';
import DashboardHeader from './components/dashboard_header';
import Foot from '../core/components/footer.jsx';
import Header from '../core/containers/header';
import Dashboard from './containers/dashboard';
import StaffList from '/client/modules/client-module/containers/staff_list';
import {accessControl} from '/lib/access-control/access-control';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
const dashboardRoutes = FlowRouter.group({
  prefix: "/dashboard",
  triggersEnter: [function (context, redirect) {
    accessControl.isLoggedIn('dashboard', redirect);
  }]
});

export {dashboardRoutes};
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/', {
    name: 'dashboard',
    triggersEnter: [function (context, redirect) {
      accessControl.isLoggedIn('dashboard', redirect);
    }],
    action() {
      mount(MainLayoutCtx,
        {head: () => (<DashboardHeader />), content: ()=>(<Dashboard />), footer: ()=>(<Foot/>),},
      );
    }
  });
  dashboardRoutes.route('/stafflist', {
    name: 'dashboard.stafflist',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<StaffList />), footer: () => (<Foot />)
      });
    }
  });
}
