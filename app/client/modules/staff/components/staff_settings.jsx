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

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {userPermissions, user, permissions, staffId} = this.props;
    const {role} = (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <section id="team">
        <PageTitle title="Staff Settings"/>
        <Tabs/>

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
