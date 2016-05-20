import React from 'react';
import {mount} from 'react-mounter';
import {test} from '/lib/test';
import {accessControl} from '/lib/access-control/access-control'

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import {InOutBoard} from  './containers';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/inOutBoard', {
    name: 'staff.inOutBoard',
    action() {
      console.log(accessControl.isLoggedIn());
      console.log(Meteor.user());
      if(accessControl.isLoggedIn()){
        mount(MainLayoutCtx, {
          content: ()=>(<InOutBoard />)
        });
      }else{
        FlowRouter.redirect('/login');
      }
    }
  });
}
