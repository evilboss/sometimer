import React from 'react';
import TimeTotal from '../containers/time_total';
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';
import {control} from '/lib/access-control/control';

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
    const {staff, index, userPermissions} = this.props;
    return (
      <div className="collection-item avatar" key={index}>
        <img src={"/uploads/" + staff.profile.displayPhoto} alt="" className="circle"/>
        <div className="row">
          <div className="col s3">
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
          </div>
          <div className="col s9 flex">
            <TimeTotal userId={staff._id} date={this.state.date}/>
            <div className="status center-align">
              <div className={`beacon ${staff.profile.status}`}></div>
              {staff.profile.status}
            </div>
            <div className="icons center-align">
              {
                (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                  <a href={`/dashboard/staff/${staff._id}`}>
                    <img src="/Assets/icons/time.png"/>
                  </a>
                  : '' : ''
              }
              <img src="/Assets/icons/message.png" onClick={sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!')}/>
              <img src="/Assets/icons/phone.png" onClick={sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!')}/>
              <img src="/Assets/icons/file.png" onClick={sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!')}/>
              {
                (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                  <a href={`/dashboard/staff/settings/${staff._id}`}>
                    <img src="/Assets/icons/settings.png"/>
                  </a>
                  : '' : ''
              }
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default StaffDetails;
