import React from 'react';
import {sweetPrompts} from "/client/utils/helpers/sweet-helper";
import {control} from "/lib/access-control/control";
import StatusIndicator from "/client/modules/team/components/status_indicator";
import {formatHelper} from "/client/utils/helpers/format-helpers";

class StaffSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {staff, index, userPermissions, currentUser, teamId, isStaff, totalBreak, totalHours} = this.props;
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


            <td className="center-align">
              {totalBreak}
            </td>
            <td className="center-align">
              {totalHours}
            </td>
          </tr>
          :
          <tr>
            <td>Please wait</td>
          </tr>
        :
        <tr>
          <td>Please wait</td>
        </tr>
    )
      ;
  }
}
StaffSummary.defaultProps = {
  totalBreak: '09:00', totalHours: '40:00'
};

export default StaffSummary;
