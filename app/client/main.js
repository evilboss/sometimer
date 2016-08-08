import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import timesheetModule from './modules/timesheet';
import userModule from './modules/users';
import staffModule from './modules/staff';
import taskModule from './modules/task';
import reactUtilsModule from './modules/reactUtils';
import teamModule from './modules/team';
import dashboardModule from './modules/dashboard';
import projectsModule from './modules/projects';
import commentsModule from './modules/comments';
import managerModule from './modules/manager';
import clientModule from './modules/client';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(timesheetModule);
app.loadModule(userModule);
app.loadModule(taskModule);
app.loadModule(staffModule);
app.loadModule(reactUtilsModule);
app.loadModule(teamModule);
app.loadModule(dashboardModule);
app.loadModule(projectsModule);
app.loadModule(commentsModule);
app.loadModule(managerModule);
app.loadModule(clientModule);

app.init();
