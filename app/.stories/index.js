import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Breadcrumbs from '/client/modules/core/components/breadcrumbs';
import Tabs from '/client/modules/team/components/tabs';
storiesOf('Breadcrumbs', module)
  .add('Empty Breadcrumbs', () => (
    <Breadcrumbs/>
  ));
storiesOf('Tabs', module)
  .add('Empty Tabs', () => (
    <Tabs/>
  ))
  .add('Tabs with readManagers permission', () => (
    <Tabs userPermission={['readManagers,readAdmin']}/>
  ));