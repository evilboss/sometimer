import React from 'react';
import {mount} from 'react-mounter';
import {Footer} from '../core/components';
import Header from '../core/containers/header';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
}