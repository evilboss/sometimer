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

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: [],
      object: {},
    }
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  callbackFunction(selected) {
    this.setState({object: selected})
  }

  getData(data) {
    this.setState({staffList: data})
  }

  addTeam(team) {
    team.members = this.state.staffList;
    team.members.push(Meteor.userId());
    Meteor.call('team.insert', team);
    FlowRouter.go('/dashboard/team');
  }

  render() {
    const {allStaff} = this.props;
    return (
      <section id="team">

        <Tabs/>
        <PageTitle title="Add a New Team"/>
        <section id="create-team" className="col s12">
          <div className="row no-margin-bottom">
            <Formsy.Form onSubmit={this.addTeam.bind(this)}>
              <div className="col s12">
                <MyInput name="name" ref="name" fieldSize="col s12" title="Name of Team / Department" required/>

                <div className="input-field col s12">
                  <ReactMaterialSelect label="Choose a Team Leader" resetLabel="None of them"
                                       onChange={this.callbackFunction}>
                    {(allStaff) ?
                      allStaff.map((staff, index) => (
                        <option dataValue={staff._id}>
                          <DisplayManager userId={staff._id}/>
                        </option>
                      )) : ''}
                  </ReactMaterialSelect>
                </div>

                <MyInput name="name" ref="teamLeadDesignation" fieldSize="col s12" title="Team Leader Designation"
                         required/>
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
