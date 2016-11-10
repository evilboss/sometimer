import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Foot from '/client/modules/core/components/footer.jsx';
import Header from '/client/modules/core/containers/header';
import {accessControl} from '/lib/access-control/access-control';
import PublicLayout from '/client/modules/core/components/public_layout.jsx';
import {ManageStaff, AddNewStaff} from '/client/modules/team/containers/manage_staff/';
import ManageClients from '/client/modules/team/containers/manage_clients/manage_clients';
import ManageAdmins from '/client/modules/team/containers/manage_admins/manage_admins';
import ManageManagers from '/client/modules/team/containers/manage_managers/manage_managers';
import TeamList from '/client/modules/team/containers/manage_team/team_list';
import CreateTeam from '/client/modules/team/containers/manage_team/create_team';


const dashboardRoutes = FlowRouter.group({
  prefix: "/dashboard",
  triggersEnter: [function (context, redirect) {
    accessControl.isLoggedIn('dashboard', redirect);
  }]
});
export {dashboardRoutes};
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  dashboardRoutes.route('/team', {
    name: 'dashboard.team',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<TeamList />), footer: () => (<Foot />)
      });
    }
  });
  dashboardRoutes.route('/team/user/new/:userType', {
    name: 'dashboard.user.new',
    action(params, queryParams) {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<AddNewStaff userType={params.userType}/>),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });

  dashboardRoutes.route('/team/new', {
    name: 'dashboard.team.new',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<CreateTeam />), footer: () => (<Foot />)
      });
    }
  });

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
  dashboardRoutes.route('/team/manage-admins', {
    name: 'dashboard.manageAdmins',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageAdmins />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });
  dashboardRoutes.route('/team/manage-managers', {
    name: 'dashboard.manageManagers',
    action() {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageManagers />),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });
};
