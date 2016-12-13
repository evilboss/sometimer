import React from 'react';
import {mount} from 'react-mounter';
import {test} from '/lib/test';
import {accessControl} from '/lib/access-control/access-control'
import {Footer} from '../core/components';
import Header from '../core/containers/header';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PunchcardLayout from '/client/modules/core/components/punchcard_layout.jsx';
import {TimeTracker} from  './containers';
import Profile from '../users/containers/Profile';
import {dashboardRoutes} from '/client/modules/dashboard/routes'
import EditProfile from '../users/containers/profile_edit'
import StaffSettings from './containers/staff_settings';
/*TODO: add dashboardRoutes */
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const PunchCardLayoutCtx = injectDeps(PunchcardLayout);
  dashboardRoutes.route('/timetracker', {
    name: 'users.timetracker',
    action() {
      mount(PunchCardLayoutCtx, {
        title: 'TimeTracker: ' + DocHead.getTitle(),
        content: () => (<TimeTracker />)
      });
    }
  });
  dashboardRoutes.route('/profile', {
    name: 'users.profile',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<Profile />), footer: () => (<Footer />)
      });
    }
  });
  dashboardRoutes.route('/profile/edit', {
    name: 'users.profile.edit',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<EditProfile />), footer: () => (<Footer />)
      });
    }
  });
  dashboardRoutes.route('/staff/settings/:projectId/:staffId', {
    name: 'staff.project.settings',
    action(params){
      console.log('staffSettings project');
      mount(MainLayoutCtx, {
        head: () => (<Header />),
        content: () => (<StaffSettings staffId={params.staffId}/>),
        footer: () => (<Footer />)
      });
    }
  });
  dashboardRoutes.route('/staff-settings/team/:teamId/:staffId', {
    name: 'staff.team.settings',
    action(params){
      console.log('staffSettings team');
      mount(MainLayoutCtx, {
        head: () => (<Header />),
        content: () => (<StaffSettings teamId={params.teamId} staffId={params.staffId}/>),
        footer: () => (<Footer />)
      });
    }
  });

  dashboardRoutes.route('/staff/settings/:staffId', {
    name: 'staff.settings',
    action(staffId){
      mount(MainLayoutCtx, {
        head: () => (<Header />),
        content: () => (<StaffSettings staffId={staffId.staffId}/>),
        footer: () => (<Footer />)
      });
    }
  });

}
