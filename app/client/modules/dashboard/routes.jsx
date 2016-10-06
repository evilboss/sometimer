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
import Team from '/client/modules/team/components/team';
import CreateTeam from '/client/modules/team/containers/create_team';
import {control} from '/lib/access-control/control';
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
  dashboardRoutes.route('/team', {
    name: 'dashboard.team',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<Team />), footer: () => (<Foot />)
      });
    }
  });

  dashboardRoutes.route('/team/new', {
    name: 'dashboard.newteam',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<CreateTeam />), footer: () => (<Foot />)
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
  dashboardRoutes.route('/staff/:staffId', {
    name: 'dashboard.staff',
    action(staffId){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<Timesheet userId={staffId.staffId}/>), footer: () => (<Foot />)
      });
    }
  });
}
