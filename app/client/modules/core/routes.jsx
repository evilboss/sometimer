import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Header from './components/header.jsx';
import Foot from './components/footer.jsx';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);
    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx,
                {head: () => (<Header/>), content: ()=>(<Home/>), footer: ()=>(<Foot/>)}
            );
        }
    });
}
