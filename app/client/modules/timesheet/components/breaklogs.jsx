import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

class Breaklogs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const breakLogs = this.props.breakLogs;
    const timeLog = this.props.timeLog;
    return (
      <section id="breaklogs">
        <PageTitle title="breaklogs"/>
        <div>
          <table className="centered responsive-table bordered">
            <thead>
            <tr>
              <th>Break Out</th>
              <th>Break In</th>
              <th>Duration</th>
            </tr>
            </thead>
            <tbody>
            {breakLogs.map((breakItem, index)=>(
              <tr key={index}>
                <td>
                  {breakItem.breakTimeOut}
                </td>
                <td>
                  {breakItem.breakTimeIn}
                </td>
                <td>
                  {breakItem.duration}
                </td>
              </tr>
            ))}
            </tbody>
            <tfoot>
            <tr>
              <th>Total:</th>
              <th></th>
              <th>{(timeLog) ? (timeLog.totalBreak) ? timeLog.totalBreak : '00:00:00' : '00:00:00'}</th>
            </tr>
            </tfoot>
          </table>
        </div>


      </section>
    );
  }
}

export default Breaklogs;
