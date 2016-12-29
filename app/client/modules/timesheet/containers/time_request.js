import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import moment from 'moment/moment';
import TimeRequest from '../components/time_request.jsx';

export const composer = ({context, teamId, from, to}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('timelogs.team.approval', teamId, from, to).ready, Meteor.subscribe("user.current").ready];
  const dataReady = ()=> {
    const timelogs = Collections.Timelogs.find({}, {sort: {date: 1}}).fetch();
    const dateArray = _.pluck(timelogs, 'date');
    const timeRequestList = [];
    _.each(dateArray, (date)=> {
      const logs = _.where(timelogs, {date: date});
      const loglistObject = {date: date, logs: logs};
      timeRequestList.push(loglistObject);
    });

    let timeRequest = _.uniq(timeRequestList, (timelog, key, date)=> {
      return timelog.date;
    });
    console.log('timerequest array', timeRequest);
    onData(null, {timeRequest});
  };
  (subscriptionReady) ? dataReady() : onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TimeRequest);
