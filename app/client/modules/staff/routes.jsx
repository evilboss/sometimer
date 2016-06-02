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

    triggersEnter: [function(context, redirect) {
      accessControl.isLoggedIn('staff.inOutBoard', redirect);
    }],
    action() {

      mount(MainLayoutCtx, {
        content: ()=>(<InOutBoard />)
      });
    }
  });
}