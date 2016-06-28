import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import CreateTeam from './components/create_team/create_team'
import TeamName from './components/create_team/forms/team_name';
import TeamEmail from './components/create_team/forms/team_email';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/team/create', {
    name: 'team.create',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CreateTeam formData='team.create' target="/team/create/name"/>)
      });
    }
  });
  FlowRouter.route('/team/create/name', {
    name: 'team.create.name',
    action() {
      mount(MainLayoutCtx, {
        content: () => (< CreateTeam formData='team.create.name'/>)
      });
    }
  });
  FlowRouter.route('/team/create/members', {
    name: 'team.create.members',
    action() {
      console.log('add team members');
      mount(MainLayoutCtx, {
        content: () => (< CreateTeam formData='team.create.members'/>)

      });
    }
  });
}
