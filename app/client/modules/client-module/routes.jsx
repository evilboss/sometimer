import React from 'react';
import {mount} from 'react-mounter';
import {Footer} from '../core/components';
import Header from '../core/containers/header';
import StaffList from './components/staff_list';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const clientRoutes = FlowRouter.group({
    name: 'clientRouteGroup',
    prefix: "/client"
  });
  clientRoutes.route('/stafflist', {
    name: 'client.stafflist',
    action(){
      mount(MainLayoutCtx, {
        head: () => (<Header />), content: () => (<StaffList />), footer: () => (<Footer />)
      });
    }
  });

}
