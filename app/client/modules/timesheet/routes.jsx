import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timesheet from './containers/timesheet';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/timesheet', {
     name: 'timesheet',
     action() {
       mount(MainLayoutCtx, {
         content: () => (<Timesheet />)
       });
     }
   });
}
