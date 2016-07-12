import React from 'react';
import {mount} from 'react-mounter';
import  {TaskList, TaskCreate} from './containers';
import {accessControl} from '/lib/access-control/access-control'
import Header from '../core/containers/header';
import {Footer} from '../core/components';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import {dashboardRoutes} from '/client/modules/dashboard/routes'


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/task', {
    name: 'task',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header/>),
        content: () => (<TaskList/>),
        footer: () => (<Footer/>)
      });
    }
  });
  dashboardRoutes.route('/task/new', {
    name: 'task.new',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header/>),
        content: () => (<TaskCreate/>),
        footer: () => (<Footer/>)
      });
    }
  });
}
