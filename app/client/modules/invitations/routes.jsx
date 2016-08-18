import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/invites', {
    name: 'invites',
    action(){
      
    }
  });
  FlowRouter.route('/invite/:token', {
    name: 'invite',
    action(){

    }
  });
  // FlowRouter.route('', {
  //   name: '',
  //   action() {
  //     mount(MainLayoutCtx, {
  //       content: () => (< />)
  //     });
  //   }
  // });
}
