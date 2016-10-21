import React from 'react';
import Formsy from 'formsy-react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import MyInput from '../../../../utils/form/input';
import TextArea from '../../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';


class EditTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {team, staffList} = this.props;

    return (
      <section id="team">

        <Tabs/>
        <PageTitle title="Edit Team"/>
        <section id="edit-team" className="col s12">
          <div className="row no-margin-bottom">
            <Formsy.Form>
              <div className="col s12">
                <div className="input-field col s12">

                  <input id="name" ref="name" type="text" className="validate"
                         defaultValue={(team) ? (team.name) ? team.name : '' : ''}
                  />
                  <label htmlFor="Name of Team / Department" className={(team) ? (team.name) ?'active': '':''}>Name of
                    Team /
                    Department</label>
                </div>
                <StaffMultiSelect />
                <MyInput name="name" ref="teamLeadDesignation" fieldSize="col s12" title="Team Leader Designation"
                         required/>
                <div className="row form-group required col s12 no-padding">
                  <TextArea name="description" ref="description" title="Team's Objective" required/>
                </div>
                <button className="btn waves-effect waves-light theme-color" type="button">Update Team
                  <i className="material-icons right">send</i></button>

              </div>
            </Formsy.Form>
          </div>
        </section>
      </section>
    );
  }
}

export default EditTeam;