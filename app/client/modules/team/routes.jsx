import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import CreateTeam from './components/create_team'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/team/create', {
    name: 'team.create',
    action() {
      mount(MainLayoutCtx, {
        content: () => (< CreateTeam/>)
      });
    }
  });
}
