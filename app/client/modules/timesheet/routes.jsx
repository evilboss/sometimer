import React from 'react';
import {mount} from 'react-mounter';
import Header from '../core/containers/header';
import Foot from '../core/components/footer.jsx';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timesheet from './containers/timesheet';

import {dashboardRoutes} from '/client/modules/dashboard/routes'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/timesheet', {
    name: 'timesheet',
    action() {
      mount(MainLayoutCtx, {
        title:'Timesheet: '+DocHead.getTitle(),head: () => (<Header/>), content: ()=>(<Timesheet />), footer: ()=>(<Foot/>)
      });
    }
  });
}
