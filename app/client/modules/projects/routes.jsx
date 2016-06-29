import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(MainLayout);
  const projectRoutes = FlowRouter.group({
    prefix: "/projects"
  });
  projectRoutes.route('/', {
    action(){
      console.log('Project root');
    }
  });
  projectRoutes.route('/view', {
    action(){
      console.log('Project View');
    }
  });
  projectRoutes.route('/:projectId', {
    action(){
      let projectId = FlowRouter.getParam('projectId');
      console.log('Project ProjectID',projectId);
    }
  });

}
