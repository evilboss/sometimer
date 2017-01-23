import React from 'react';
import {addTime, subtractTime} from '/lib/lib/time';

class TimesheetTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  exportToCSV() {
    const {timelogs, selectedUserId, from, to} = this.props;
    var nameFile = `${selectedUserId}.csv`;
    Meteor.call('download.csv', selectedUserId, from, to, function (err, fileContent) {
      if (fileContent) {
        var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
        saveAs(blob, nameFile);
      }
    });
  }

  render() {
    const timelogs = this.props.timelogs;
    const totalBreak = _.pluck(timelogs, 'totalBreak').reduce((a, b) => addTime(a, b), 0);
    const totalUnpaid = _.pluck(_.reject(timelogs, function (logs) {
      return logs.approved
    }), 'totalRendered').reduce((a, b) => addTime(a, b), 0);
    const totalPaid = _.pluck(_.where(timelogs, {approved: true}), 'totalRendered').reduce((a, b) => addTime(a, b), 0);
    return (
      <div>
        <tr>
          <th>Total:</th>
          <th></th>
          <th>{totalBreak}</th>
          <th></th>
          <th></th>
          <th>
            Approved:
            <span className="green-text">
            {totalPaid}&nbsp;
          </span>
            / Unapproved:
            <span className="red-text">
            {totalUnpaid}
          </span>
          </th>
        </tr>
        <div className="row">
          <button className="btn" onClick={this.exportToCSV.bind(this)}>Export</button>
        </div>
      </div>

    );
  }
}

export default TimesheetTotal;
