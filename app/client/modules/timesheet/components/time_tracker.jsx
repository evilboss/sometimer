import React from 'react';
import {
  StatusIn,
  StatusBreak,
  StatusOut
} from './time_tracker/';

class TimeTracker extends React.Component {
  constructor(props) {
    super(props);
  }


  startShift() {
    Meteor.call('timelogs.startShift');
  };

  endShift() {
    Meteor.call('timelogs.endShift');
  };

  startBreak() {
    Meteor.call('timelogs.startBreak');
  };

  endBreak() {
    Meteor.call('timelogs.endBreak');
  };

  render() {
    let currentUser = this.props.currentUser;
    let status = currentUser.profile.status;
    return (
      <div>
        {(!status || status == 'In') ?
          <StatusIn />
          : ''}
        {(!status || status == 'Out' || status == 'completed') ?
          <StatusOut />
          : ''}
        {(!status || status == 'Break') ?
          <StatusBreak />
          : ''}
      </div>
    );
  }
}

export default TimeTracker;
