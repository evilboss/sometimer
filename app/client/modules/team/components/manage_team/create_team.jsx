import React from 'react';
import Formsy from 'formsy-react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import MyInput from '../../../../utils/form/input';
import TextArea from '../../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import ReactMaterialSelect from 'react-material-select';
import DisplayManager from '/client/modules/manager/containers/display_manager';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {FlowHelpers} from '/client/utils/helpers/route-helpers'
import Breadcrumbs from '/client/modules/core/containers/breadcrumbs';
import CancelBtn from '/client/utils/buttons/cancel_btn';
import StepGuide from '/client/utils/buttons/step_guide';
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: [],
      object: {},
      stepGuide: false,
    }
  }

  getData(data) {
    this.setState({staffList: data})
  }

  onFocus() {
    this.setState({
      stepGuide: true,
    });
  }

  _createTeam(team) {
    Meteor.call('team.insert', team, (err, createdTeam) => {
      if (createdTeam) {
        sweetPrompts.sweetIfElseSucces('', 'Team Created', 'success',
          {path: '/dashboard/team/new', text: 'Add another Team'},
          {path: `/dashboard/team/${createdTeam}`, text: `View ${team.name}`})
      }
    });

  };

  addTeam(team) {
    team.creator = Meteor.userId();
    team.teamLeader = this.refs.teamLeader.getValue();
    team.site = domainHelpers.getSubdomain();
    (team.name) ? this._createTeam(team) : sweetPrompts.sweetSucces('Team/Department name is required', 'Team not Created', 'error');

  }


  render() {
    let {allManagers} = this.props;
    const staffList = this.state.staffList;
    return (
      <section id="team">
        <PageTitle title="Add a New Team"/>
        <Tabs/>
        <section id="create-team" className="col s12">
          <div className="row">
            <Breadcrumbs crumbs={
              [{text: 'All Teams', path: 'dashboard.team', params: ''}, {
                text: 'Add Team',
                path: 'dashboard.team.new',
                params: ''
              }]}/>
            <Formsy.Form onSubmit={this.addTeam.bind(this)} className="twbs">
              <div className="col s12">
                <MyInput name="name" ref="name" fieldSize="col s5" title="Name of Team / Department" required/>
                <div className="input-field col s5 manager-guide">
                  <ReactMaterialSelect label="Choose a Team Leader/ Manager"
                                       ref="teamLeader"
                                       resetLabel={(_.isEmpty(allManagers)) ? 'No Manager exist in the system' : 'Clear Selected Option'}>
                    {allManagers.map((manager) => (
                      <option key={manager._id}
                              dataValue={manager._id}>
                        {(manager.profile) ? `${manager.profile.firstName} ${manager.profile.lastName}` : ''}

                      </option>
                    ))}
                  </ReactMaterialSelect>
                  <StepGuide userType="manager" pageTitle="Team"/>
                </div>

                <div className="input-field col s5 no-margin staff-guide">
                  <StepGuide userType="staff" pageTitle="Team"/>
                </div>
              </div>
              <div>
                <CancelBtn route="/dashboard/team/"/>
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
