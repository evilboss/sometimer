import React from 'react';
import {mount} from 'react-mounter';
import  {TaskList,TaskCreate} from './containers';
import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/task', {
    name: 'task',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TaskList/>)
      });
    }
  });
  FlowRouter.route('/task/new', {
    name: 'task.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TaskCreate/>)
      });
    }
  });
}
