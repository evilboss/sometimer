import React from 'react';
import {mount} from 'react-mounter';
import Header from '../core/containers/header';
import Foot from '../core/components/footer.jsx';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timesheet from './containers/timesheet';
import Breaklogs from './containers/breaklogs';
import {dashboardRoutes} from '/client/modules/dashboard/routes'
import TimeRequest from '/client/modules/timesheet/containers/time_request';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/timesheet', {
    name: 'timesheet',
    action() {
      mount(MainLayoutCtx, {
        title: 'Timesheet: ' + DocHead.getTitle(),
        head: () => (<Header/>),
        content: ()=>(<Timesheet />),
        footer: ()=>(<Foot/>)
      });
    }
  });
  dashboardRoutes.route('/timesheet/breaks/:timeLogId', {
    name: 'timesheet.breaks',
    action(timeLogId) {
      mount(MainLayoutCtx, {
        title: 'Break Logs: ' + DocHead.getTitle(),
        head: () => (<Header/>),
        content: ()=>(<Breaklogs timeLogId={timeLogId.timeLogId}/>),
        footer: ()=>(<Foot/>)
      });
    }
  });
  dashboardRoutes.route('/timesheet/request', {
    name: 'timesheet.request',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header/>),
        content: ()=>(<TimeRequest />),
        footer: ()=>(<Foot/>)
      });
    }
  });
}
