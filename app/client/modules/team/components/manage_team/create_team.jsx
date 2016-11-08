import React from 'react';
import Formsy from 'formsy-react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import MyInput from '../../../../utils/form/input';
import TextArea from '../../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import ReactMaterialSelect from 'react-material-select';
import 'react-material-select/lib/css/reactMaterialSelect.css';
import DisplayManager from '/client/modules/manager/containers/display_manager';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: [],
      object: {},
    }
  }

  getData(data) {
    this.setState({staffList: data})
  }

  addTeam(team) {
    team.members = this.state.staffList;
    team.members.push(Meteor.userId());
    team.teamLeader = this.refs.teamLeader.getValue();
    team.site = domainHelpers.getSubdomain();
    Meteor.call('team.insert', team);
    FlowRouter.go('/dashboard/team');
  }

  callbackFunction(selected) {
  }


  render() {
    let {allStaff} = this.props;

    return (
      <section id="team">

        <div className="tab-nav-wrapper">
          <div className="tab-nav inline">
            <a href="/dashboard/team/new"
               className={`${FlowHelpers.currentRoute('dashboard.team.new')}`}>
              Add Team</a>
            <a href="/dashboard/user/new">
              Add User</a>
          </div>
        </div>
        <PageTitle title="Add a New Team"/>
        <section id="create-team" className="col s12">
          <div className="row no-margin-bottom">
            <Formsy.Form onSubmit={this.addTeam.bind(this)}>
              <div className="col s12">
                <MyInput name="name" ref="name" fieldSize="col s12" title="Name of Team / Department" required/>
                <div className="input-field col s12">
                  <ReactMaterialSelect label="Choose a Team Leader" ref="teamLeader">
                    {allStaff.map((staff) => (
                      <option key={staff._id} dataValue={staff._id}>
                        {(staff.profile) ? `${staff.profile.firstName} ${staff.profile.lastName}` : ''}

                      </option>
                    ))}
                  </ReactMaterialSelect>
                </div>
                <StaffMultiSelect getData={this.getData.bind(this)}/>


                <button className="btn waves-effect waves-light theme-color" type="submit">Create Team
                  <i className="material-icons right">send</i></button>

              </div>
            </Formsy.Form>
          </div>
        </section>
      </section>

    );
  }
}

export default CreateTeam;
