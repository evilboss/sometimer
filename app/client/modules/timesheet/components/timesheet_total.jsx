import React from 'react';
import {addTime, subtractTime} from '/lib/lib/time';

class TimesheetTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const timelogs = this.props.timelogs;
    const totalBreak = _.pluck(timelogs, 'totalBreak').reduce((a, b) => addTime(a, b), 0);
    const totalUnpaid = _.pluck(_.reject(timelogs, function (logs) {
      return logs.approved
    }), 'totalRendered').reduce((a, b) => addTime(a, b), 0);
    const totalPaid = _.pluck(_.where(timelogs, {approved: true}), 'totalRendered').reduce((a, b) => addTime(a, b), 0);
    return (
      <tr>
        <th>Total:</th>
        <th></th>
        <th>{totalBreak}</th>
        <th></th>
        <th></th>
        <th>Paid:{totalPaid}/Unpaid:{totalUnpaid}</th>
      </tr>
    );
  }
}

export default TimesheetTotal;
