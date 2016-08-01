import React from 'react';
import {mount} from 'react-mounter';
import {Footer} from '../core/components';
import Header from '../core/containers/header';
import {AddProjects, ViewProjects} from './containers';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout);
  const projectRoutes = FlowRouter.group({
    name: 'projectRouteGroup',
    prefix: "/projects"
  });
  projectRoutes.route('/tileView', {
    name: 'projects.tileview',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<ViewProjects />), footer: () => (<Footer />)
      });
    }
  });
  projectRoutes.route('/listView', {
    name: 'projects.listview',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<ViewProjects />), footer: () => (<Footer />)
      });
    }
  });
  projectRoutes.route('/view', {
    action(){
      console.log('Project View');
    }
  });
  projectRoutes.route('/new', {
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<AddProjects />), footer: () => (<Footer />)
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
