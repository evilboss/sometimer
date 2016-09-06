import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from '/client/modules/core/components/public_layout.jsx';
import CreateTeam from './components/create_team/create_team'
import TeamName from './components/create_team/forms/team_name';
import TeamEmail from './components/create_team/forms/team_email';
export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(PublicLayout);

  FlowRouter.route('/team/create', {
    name: 'team.create',
    action() {
      mount(PublicLayoutCtx, {
        content: () => (<CreateTeam formData='team.create' target="/team/create/name"/>)
      });
    }
  });
  FlowRouter.route('/team/create/name', {
    name: 'team.create.name',
    action() {
      mount(PublicLayoutCtx, {
        content: () => (< CreateTeam formData='team.create.name'/>)
      });
    }
  });
  FlowRouter.route('/team/create/members', {
    name: 'team.create.members',
    action() {
      console.log('add team members');
      mount(PublicLayoutCtx, {
        content: () => (< CreateTeam formData='team.create.members'/>)

      });
    }
  });
}
