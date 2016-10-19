import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import StaffProfileForm from '/client/modules/staff/containers/staff_profile_form';
import PermissionForm from '/client/modules/staff/components/permission_form';

class StaffSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {userPermissions, user, permissions, staffId} = this.props;
    return (
      <section id="team">
        <Tabs/>
        <PageTitle title="Staff Settings"/>

        <section id="staff-settings">
          <div className="row no-margin-bottom">

            <div className="col s12 no-padding">
              <div className="col s6">

                <StaffProfileForm user={user} staffId={staffId}/>

              </div>
              <div className="col s6">
                <div className="col s12">
                  <h5>The staff that this user can see</h5>
                  <form>
                    <input name="owner" id="owner" type="hidden" defaultValue={this.props.staffId}/>
                    <StaffMultiSelect getData={this.getData.bind(this)}/>
                    <div className="right save">
                      <button className="btn theme-color">Save</button>
                    </div>
                  </form>
                </div>
                <PermissionForm userPermissions={userPermissions} permissions={permissions}/>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
      ;
  }


}

export default StaffSettings;
