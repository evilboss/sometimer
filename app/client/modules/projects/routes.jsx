import React from 'react';
import {mount} from 'react-mounter';
import {Footer} from '../core/components';
import Header from '../core/containers/header';
import {AddProjects, ViewProjects, ListView, ProjectView} from './containers';
import {accessControl} from '/lib/access-control/access-control';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout);
  const projectRoutes = FlowRouter.group({
    name: 'projectRouteGroup',
    prefix: "/projects",
    triggersEnter: [function (context, redirect) {
      accessControl.isLoggedIn('projects', redirect);
    }]
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
        head: () => (<Header />), content: () => (<ListView />), footer: () => (<Footer />)
      });
    }
  });
  projectRoutes.route('/view', {
    action(){
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
    name: 'project.single',
    action(projectId){
      mount(MainLayoutCtx, {
        head: () => (<Header />),
        content: () => (<ProjectView projectId={projectId.projectId}/>),
        footer: () => (<Footer />)
      });
    }
  });
}
