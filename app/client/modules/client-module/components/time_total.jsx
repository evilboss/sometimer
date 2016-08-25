import React from 'react';

class TimeTotal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const timelog = this.props.timelog;
    console.log(timelog);
    return (
      <div>
        <div>
          Total Hours {(timelog) ? (timelog.totalRendered) ? timelog.totalRendered : '0' : '0'}
        </div>
        <div>
          Total Hours {(timelog) ? (timelog.totalBreak) ? timelog.totalBreak : '0' : '0'}
        </div>
      </div>
    );
  }
}

export default TimeTotal;
