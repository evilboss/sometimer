import React from 'react';
import {control} from "/lib/access-control/control";
import {sweetPrompts} from "/client/utils/helpers/sweet-helper";

class StatusIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  forceEndShift() {
    let {userId} = this.props;
    sweetAlert({
      title: "Force End Shift?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0a84ad",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      closeOnConfirm: false,
      closeOnCancel: true,
      allowEscapeKey: true,
      allowOutsideClick: true
    }, function (isConfirm) {
      if (isConfirm) {
        Meteor.call('timelogs.endShift', userId);
        swal(
          'Force Logout Successful',
          'The user was forced end shift',
          'success'
        )
      }
    });
  }


  render() {
    const indicatorClass = this.props.class;
    return (
      <div>
        <div className={`status-indicator ${indicatorClass}`}>
        </div>
        <span> {indicatorClass}</span>
        {control.isStaff(Meteor.userId()) ? null
          : (indicatorClass == 'Out' || indicatorClass == 'Invited') ? '' :
            <button className="btn" onClick={this.forceEndShift.bind(this)}>Force End Shift</button>}
      </div>

    );
  }
}

export default StatusIndicator;
