import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Formsy from 'formsy-react';
import MyInput from '../../../utils/form/input';
import TextArea from '../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import TeamQuickView from '/client/modules/team/containers/team_quick_view';

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
        <PageTitle title="All Team"/>
        <div className="row flex no-section-margin">

          <div className="col s2 no-horizontal-padding">
            <TeamQuickView/>
          </div>
          <div className="col s10">
            <section className="create-team">
              <h4>Create A Team</h4>
              <Formsy.Form onSubmit={this.addTeam.bind(this)}>
                <MyInput name="name" ref="name" fieldSize="col s12" title="Team Name" required/>
                <div className="row form-group required col s12 no-padding">
                  <TextArea name="description" ref="description" title="Description" required/>
                </div>
                <StaffMultiSelect getData={this.getData.bind(this)}/>
                <button className="btn waves-effect waves-light theme-color" type="submit">Start the Team
                  <i className="material-icons right">send</i></button>

              </Formsy.Form>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default CreateTeam;
