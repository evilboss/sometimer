import React from "react";
import {sweetPrompts} from "/client/utils/helpers/sweet-helper";
import {control} from "/lib/access-control/control";
import StatusIndicator from "/client/modules/team/components/status_indicator";
import {formatHelper} from "/client/utils/helpers/format-helpers";

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
    const {staff, index, userPermissions, currentUser, teamId, isStaff} = this.props;
    const {role} = staff.profile;
    console.log(staff, 'staff');
    return (
      (staff) ?
        (staff.profile) ?
          <tr key={index}>
            <td className="staff-dp">
              <a href={`/dashboard/staff-settings/team/${teamId}/${staff._id}`}>
                <img
                  src={(staff.profile.displayPhoto) ? staff.profile.displayPhoto : '/uploads/defaults/default_user.png'}
                  alt="Staff"
                  className="circle responsive-img dp-small"/>
              </a>


            </td>
            <td className="staff-details">
              <div className="col no-margin">

                <h6> {staff.profile.firstName}
                </h6>

              </div>
            </td>
            <td>
              <h6>{staff.profile.position}</h6>
            </td>

            <td className="center-align">
              {(isStaff) ? null :
                <StatusIndicator userId={staff._id} class={(staff.profile) ?
                  (staff.profile.status) ? (staff.profile.status == 'completed') ? 'Out' : formatHelper.capitalize(staff.profile.status)
                    : '' : ''}/>
              }

            </td>

            <td className="center-align">

              <div className="icons center-align">
                {(control.isAdmin(currentUser)) ?
                  (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                    <a href='/dashboard/team/manage-managers'>
                      <i className="material-icons">edit</i>
                    </a>
                    : '' : '' : ''
                }
                {
                  (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                    <a href={`/dashboard/staff/${teamId}/${staff._id}`}>
                      <img src="/Assets/icons/time.png"/>
                    </a>
                    : '' : ''
                }

              </div>

            </td>
          </tr>
          : '' : ''
    )
      ;
  }
}

export default StaffDetails;
