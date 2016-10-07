import React from 'react';
import Formsy from 'formsy-react';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import MyInput from '../../../utils/form/input';
import TextArea from '../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';


class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: []
    }
  }

  componentDidMount() {
    $(document).ready(function () {
      $('select').material_select();
    });
  }

  getData(data) {
    this.setState({staffList: data})
  }

  addTeam(team) {
    team.members = this.state.staffList;
    team.members.push(Meteor.userId());
    Meteor.call('team.insert', team);
    FlowRouter.go('/dashboard/team/list');
  }

  render() {
    return (
      <section id="create-team">
        <SubTabs />
        <div className="border-top row no-margin-bottom relative">
          <Formsy.Form onSubmit={this.addTeam.bind(this)}>
            <div className="col s12">
              <MyInput name="name" ref="name" fieldSize="col s12" title="Name of Team / Department" required/>
              <StaffMultiSelect getData={this.getData.bind(this)}/>
              <MyInput name="name" ref="teamLeadDesignation" fieldSize="col s12" title="Team Leader Designation"
                       required/>
              <div className="row form-group required col s12 no-padding">
                <TextArea name="description" ref="description" title="Team's Objective" required/>
              </div>
              <button className="btn waves-effect waves-light theme-color" type="submit">Create Team
                <i className="material-icons right">send</i></button>

            </div>
          </Formsy.Form>
        </div>
      </section>
    );
  }
}

export default CreateTeam;
