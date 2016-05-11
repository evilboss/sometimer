import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import timesheetModule from './modules/timesheet';
import userModule from './modules/users';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(timesheetModule);
app.loadModule(userModule);
app.init();
