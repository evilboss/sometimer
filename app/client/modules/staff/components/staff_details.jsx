import React from 'react';
import TimeTotal from '../containers/time_total';
class StaffDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  };

  componentDidMount() {
    this.getToday();
  };

  getToday() {
    let reactState = this;
    Meteor.call('timesheet.getToday', function (err, res, callback) {
      if (err) {
        sweatAlert(
          'Ooops',
          'Something went wrong!',
          '' + JSON.stringify(err, null, 2)
        );

      } else {
        reactState.setState({date: res});
      }
    });
  }

  render() {
    const {staff, index} = this.props;
    return (
      
      <a className="collection-item avatar" key={index} href={`/dashboard/staff/${staff._id}`}>
        <img src={"/uploads/" + staff.profile.displayPhoto} alt="" className="circle"/>

        <table>
          <tbody>
          <tr>
            <th>Name:</th>
            <td>{staff.profile.firstName}</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>{staff.profile.department}</td>
          </tr>
          <tr>
            <th>Designation:</th>
            <td>{staff.profile.jobTitle}</td>
          </tr>
          <tr>
            <th>Status:</th>
            <td>{staff.profile.staffType}</td>
          </tr>
          </tbody>
        </table>

        <TimeTotal userId={staff._id} date={this.state.date}/>

        <div>Login Status {staff.profile.status}</div>

      </a>
    );
  }
}

export default StaffDetails;
