import React from 'react';
import {mount} from 'react-mounter';
import {test} from '/lib/test';
import {accessControl} from '/lib/access-control/access-control'
import {Footer} from '../core/components';
import Header from '../core/containers/header';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import {InOutBoard} from  './containers';
import Profile from '../users/containers/Profile'
import EditProfile from '../users/containers/profile_edit'

/*TODO: add dashboardRoutes */
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const dashboardRoutes = FlowRouter.group({
    prefix: "/dashboard",
    triggersEnter: [function (context, redirect) {
      accessControl.isLoggedIn('dashboard', redirect);
    }]
  });

  dashboardRoutes.route('/inOutBoard', {
    name: 'staff.inOutBoard',

    action() {
      mount(MainLayoutCtx, {
        content: ()=>(<InOutBoard />)
      });
    }
  });

  dashboardRoutes.route('/profile', {
    name: 'users.profile', action() {
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<Profile />), footer: () => (<Footer />)
      });
    }
  });

  dashboardRoutes.route('/profile/edit', {
    name: 'users.profile.edit', action() {
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<EditProfile />), footer: () => (<Footer />)
      });
    }
  });

}