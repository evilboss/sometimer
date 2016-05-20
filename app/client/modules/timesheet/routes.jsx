import React from 'react';
import {mount} from 'react-mounter';
import Header from '../core/components/header.jsx';
import Foot from '../core/components/footer.jsx';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timesheet from './containers/timesheet';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/timesheet', {

    name: 'timesheet',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header/>), content: ()=>(<Timesheet />), footer: ()=>(<Foot/>)
      });
    }
  });
}
