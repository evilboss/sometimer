import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from './components/public_layout';
import Entry from './components/landing/entry_point';
import NotFound from './components/landing/not_found_page';
import Header from './components/landing/landing_header';
import Foot from './components/landing/landing_footer';
import {Oauth} from '/client/modules/reactUtils/libs/oauth';


export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(PublicLayout);
  FlowRouter.route('/', {
    name: 'home',
    triggersEnter: [Oauth.directToTeam],
    action() {

      mount(PublicLayoutCtx,
        {head: () => (<Header/>), content: ()=>(<Entry />), footer: ()=>(<Foot/>)}
      );
    }
  });

  FlowRouter.route('/notfound', {
    name: 'home',
    action() {
      mount(PublicLayoutCtx,
        {head: () => (<Header/>), content: ()=>(<NotFound />), footer: ()=>(<Foot/>)}
      );
    }
  });
}
