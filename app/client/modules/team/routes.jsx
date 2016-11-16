import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Foot from '/client/modules/core/components/footer.jsx';
import Header from '/client/modules/core/containers/header';
import {accessControl} from '/lib/access-control/access-control';
import {ManageStaff, AddNewStaff} from '/client/modules/team/containers/manage_staff/';
import ManageClients from '/client/modules/team/containers/manage_clients/manage_clients';
import ManageAdmins from '/client/modules/team/containers/manage_admins/manage_admins';
import ManageManagers from '/client/modules/team/containers/manage_managers/manage_managers';
import TeamList from '/client/modules/team/containers/manage_team/team_list';
import CreateTeam from '/client/modules/team/containers/manage_team/create_team';
import EditTeam from '/client/modules/team/containers/manage_team/edit_team';
import StaffList from '/client/modules/staff/containers/staff_list';
import {dashboardRoutes} from '/client/modules/dashboard/routes';
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
  dashboardRoutes.route('/team/edit/:teamId', {
    name: 'dashboard.team.edit',
    action(params){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<EditTeam teamId={params.teamId}/>), footer: () => (<Foot />)
      });
    }
  });
  dashboardRoutes.route('/team/:teamId', {
    name: 'dashboard.myteam',
    action(params){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<StaffList teamId={params.teamId}/>), footer: () => (<Foot />)
      });
    }
  });
  dashboardRoutes.route('/team/:teamId/manage-staff', {
    name: 'dashboard.team.manageStaff',
    action(params) {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageStaff teamId={params.teamId}/>),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });
  dashboardRoutes.route('/team/:teamId/manage-clients', {
    name: 'dashboard.team.manageClients',
    action(params) {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageClients teamId={params.teamId}/>),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });
  dashboardRoutes.route('/team/:teamId/manage-managers', {
    name: 'dashboard.team.manageManagers',
    action(params) {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<ManageManagers teamId={params.teamId}/>),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });
  dashboardRoutes.route('/team/:teamId/user/new/:userType', {
    name: 'dashboard.team.user.new',
    action(params) {
      mount(MainLayoutCtx,
        {
          head: () => (<Header />),
          content: ()=>(<AddNewStaff userType={params.userType} teamId={params.teamId}/>),
          footer: ()=>(<Foot/>),
        },
      );
    }
  });

};
