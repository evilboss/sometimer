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

      <tr key={index}>
        <td>
          <img src={staff.profile.displayPhoto} alt="Staff"
               className="circle responsive-img dp-small left"/>
          <div className="col staff-details no-margin">
            <h6>{staff.profile.firstName}<br/>
              <small>{staff.profile.jobTitle}</small>
            </h6>
          </div>
        </td>
        <TimeTotal userId={staff._id} date={this.state.date}/>
        <td className="center-align">
          <div className="status">
            <div className={`beacon ${staff.profile.status}`}></div>
            <span>{staff.profile.status}</span>
          </div>
        </td>
        <td className="center-align">
          <div className="icons center-align">
            {
              (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                <a href={`/dashboard/staff/${staff._id}`}>
                  <img src="/Assets/icons/time.png"/>
                </a>
                : '' : ''
            }
            {
              (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                <a href={`/dashboard/staff/settings/${staff._id}`}>
                  <img src="/Assets/icons/settings.png"/>
                </a>
                : '' : ''
            }
          </div>
        </td>
      </tr>

    );
  }
}

export default StaffDetails;
