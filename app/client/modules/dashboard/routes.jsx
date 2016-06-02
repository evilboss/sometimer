import React from 'react';
import {mount} from 'react-mounter';
import Header from '../core/components/header.jsx';
import Foot from '../core/components/footer.jsx';
import Home from '../core/components/home.jsx';
import {accessControl} from '/lib/access-control/access-control';


import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/dashboard', {
    name: 'dashboard',
    triggersEnter: [function(context, redirect) {
      accessControl.isLoggedIn('dashboard', redirect);
    }],
    action() {
      mount(MainLayoutCtx,
        {head: () => (<Header/>), content: ()=>(<Home/>), footer: ()=>(<Foot/>)}
      );
    }
  });
}
