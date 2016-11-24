import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import StaffProfileForm from '/client/modules/staff/containers/staff_profile_form';
import PermissionForm from '/client/modules/staff/containers/permission_form';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import Breadcrumbs from '/client/modules/core/containers/breadcrumbs';
class StaffSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  _removeStaff(userId) {
    let {removeStaff} = this.props;
    sweetAlert({
      title: "Confirm Delete?",
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
        removeStaff(userId);

      }
    });
  }

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {userPermissions, user, permissions, staffId} = this.props;
    const {role} = (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <section id="team" className="relative">
        <PageTitle title="Staff Settings"/>
        <Tabs/>
        <button className="btn delete waves-effect waves-light theme-color" type="button"
                onClick={this._removeStaff.bind(this, user._id)}>Delete Staff
          <i className="right material-icons close">
            delete_forever</i></button>
        <section id="staff-settings">

          <div className="row no-margin-bottom">

            <div className="col s12 no-padding">

              <div className="col s8 no-padding">
                <StaffProfileForm user={user} staffId={staffId}/>
              </div>
              {
                (role == 'client') ? null :
                  <PermissionForm userPermissions={userPermissions} user={user} permissions={permissions}/>
              }
            </div>
          </div>
        </section>

      </section>
    );
  }


}

export default StaffSettings;
