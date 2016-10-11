import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import TeamList from '/client/modules/team/containers/team_list';
import ManageStaff from '/client/modules/team/containers/manage_staff/manage_staff';
import AddNewStaff from '/client/modules/team/containers/manage_staff/add_new_staff';
import StaffDetails from '/client/modules/team/containers/manage_staff/staff_details';
import ManageClients from '/client/modules/team/containers/manage_clients/manage_clients';
import CreateTeam from '/client/modules/team/containers/create_team';
import {control} from '/lib/access-control/control';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  addNewStaff(e) {
    e.preventDefault();
    console.log('utub');
  }

  render() {
    const {userPermissions} = this.props;
    return (
      <section id="team">
        <PageTitle title="All Team"/>
        <div className="row tabs-wrapper">
          <div className="col s7 tab-nav">
            <ul className="tabs">
              <li className="tab col s3"><a href="#ManageTeam" className="active">Manage Team</a></li>
              {
                (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                  <li className="tab col s3"><a href="#ManageStaff" className="">Manage Staff</a></li>
                  : '' : ''
              }
              {
                (userPermissions) ? control.isPermitted('updateClients', userPermissions) ?
                  <li className="tab col s3"><a href="#ManageClients" className="">Manage Clients</a></li>
                  : '' : ''
              }

            </ul>
          </div>

          <div className="col s12 tabs-content no-padding">
            <section id="ManageTeam" className="col s12">
              <TeamList/>
            </section>
            {
              (userPermissions) ? control.isPermitted('updateStaffs', userPermissions) ?
                <section id="ManageStaff" className="col s12">
                  <ManageStaff />
                </section>
                : '' : ''
            }
            {
              (userPermissions) ? control.isPermitted('updateClients', userPermissions) ?
                <section id="ManageClients" className="col s12">
                  <ManageClients/>
                </section>
                : '' : ''
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
