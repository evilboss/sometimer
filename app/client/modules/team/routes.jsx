import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Foot from '/client/modules/core/components/footer.jsx';
import Header from '/client/modules/core/containers/header';
import {accessControl} from '/lib/access-control/access-control';
import PublicLayout from '/client/modules/core/components/public_layout.jsx';
import CreateTeam from './components/create_team/create_team'
import {ManageStaff, AddNewStaff} from '/client/modules/team/containers/manage_staff/';
import ManageClients from '/client/modules/team/containers/manage_clients/manage_clients';

const dashboardRoutes = FlowRouter.group({
  prefix: "/dashboard",
  triggersEnter: [function (context, redirect) {
    accessControl.isLoggedIn('dashboard', redirect);
  }]
});
export {dashboardRoutes};
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/team/manage-staff', {
    name: 'dashboard.manageStaff',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageStaff />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });

  dashboardRoutes.route('/team/manage-staff/new', {
    name: 'dashboard.manageStaff.new',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<AddNewStaff />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });

  dashboardRoutes.route('/team/manage-clients', {
    name: 'dashboard.manageClients',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageClients />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });

  dashboardRoutes.route('/team/manage-clients/new', {
    name: 'dashboard.manageClients.new',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageClients />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });
};
