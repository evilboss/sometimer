import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import {InOutBoard} from  './containers';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/inOutBoard', {
    name: 'staff.inOutBoard',
    action() {
      mount(MainLayoutCtx, {
        content: ()=>(<InOutBoard />)
      });
    }
  });
}
