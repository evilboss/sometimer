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
        <div>Name: {staff.profile.firstName}</div>
        <div>Department: {staff.profile.department}</div>
        <div>Job Title: {staff.profile.jobTitle}</div>
        <div>Status: {staff.profile.staffType}</div>
        <div>Task?</div>
        <div>Login Status: {staff.profile.status}</div>
        <TimeTotal userId={staff._id} date={this.state.date}/>
      </a>
    );
  }
}

export default StaffDetails;
