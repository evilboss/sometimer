import React from 'react';
import {mount} from 'react-mounter';
import {AddProjects, ViewProjects} from './containers';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout);
  const projectRoutes = FlowRouter.group({
    name:'projectRouteGroup',
    prefix: "/projects"
  });
  projectRoutes.route('/', {
    name: 'projects',
    action(){
      mount(MainLayoutCtx, {
        content: () => (<ViewProjects/>)
      });    }
  });
  projectRoutes.route('/view', {
    action(){
      console.log('Project View');
    }
  });
  projectRoutes.route('/new', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddProjects/>)
      });
    }
  });
  projectRoutes.route('/:projectId', {
    action(){
      let projectId = FlowRouter.getParam('projectId');
      console.log('Project ProjectID', projectId);
    }
  });

}
