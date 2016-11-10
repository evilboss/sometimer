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
          <StatusIn startBreakAction={this.startBreak.bind(this)} endShiftAction={this.endShift.bind(this)}/>
          : ''}
        {(!status || status == 'Out') ?
          <StatusOut action={this.startShift.bind(this)}/>
          : ''}
        {(!status || status == 'Break') ?
          <StatusBreak action={this.endBreak.bind(this)}/>
          : ''}
      </div>
    );
  }
}

export default TimeTracker;
