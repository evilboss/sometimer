import React from 'react';
import {mount} from 'react-mounter';
import DashboardHeader from './containers/dashboard_header';
import Foot from '../core/components/footer.jsx';
import Header from '../core/containers/header';
import Dashboard from './containers/dashboard';
import StaffList from '/client/modules/staff/containers/staff_list';
import {accessControl} from '/lib/access-control/access-control';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timesheet from '/client/modules/timesheet/containers/timesheet';
import EditTeam from '/client/modules/team/containers/manage_team/edit_team';
import Settings from '/client/modules/core/containers/settings';
import {control} from '/lib/access-control/control';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
const dashboardRoutes = FlowRouter.group({
  prefix: "/dashboard",
  triggersEnter: [function (context, redirect) {
    accessControl.isLoggedIn('dashboard', redirect);
  }, (context, redirect)=> {
    console.log(domainHelpers.getSubdomain());
  }]
});
export {dashboardRoutes};
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<DashboardHeader />),
          content: ()=>(<Dashboard />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });

  dashboardRoutes.route('/team/edit/:teamId', {
    name: 'dashboard.team.edit',
    action(params){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<EditTeam teamId={params.teamId}/>), footer: () => (<Foot />)
      });
    }
  });

  dashboardRoutes.route('/settings', {
    name: 'dashboard.settings',
    action(params){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<Settings />), footer: () => (<Foot />)
      });
    }
  });

  dashboardRoutes.route('/team/:teamId', {
    name: 'dashboard.myteam',
    action(params){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<StaffList teamId={params.teamId}/>), footer: () => (<Foot />)
      });
    }
  });

  dashboardRoutes.route('/staff/:teamId/:staffId', {
    name: 'dashboard.staff',
    action(params){
      mount(MainLayoutCtx, {
        head: () => (<Header />),
        content: () => (<Timesheet userId={params.staffId} teamId={params.teamId}/>),
        footer: () => (<Foot />)
      });
    }
  });
}