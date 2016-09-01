import React from 'react';
import MyInput from '../../../utils/form/input';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PhaseList from './phase_list';

class AddPhase extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      closeOnSelect: true,
      format: 'd mmmm, yyyy',
    });
  }

  render() {
    return (
      <section className="create-phase white-wrapper">
        <h5>Breakdown your project in phases/Subprojects/Tasks</h5>
        <p>If your project has a lot of moving parts. It's necessary to break them down.
          Click below the modules to fill them up.<br/>
          If you find a certain module is not necessary, you can close them by clicking the x their right.</p>
        <h4>Create A Phase</h4>

        <PhaseList/>
          <Formsy.Form className="row login">
            <MyInput name="phaseName" fieldSize="col s4" title="Phase Title" required/>
            <div className="row form-group col s8">
              <div className="input-field col s6">
                <input type="date" name="input_from" ref="input_from" id="input_from" className="datepicker"/>
                <label htmlFor="date-from">Date from</label>
              </div>
              <div className="input-field col s6">
                <input type="date" name="date-to" ref="input_to" id="input_to" className="datepicker"/>
                <label htmlFor="date-to">Date To</label>
              </div>
            </div>


            <MyInput name="description" title="Project description" required/>

            <StaffMultiSelect/>
            <button className="btn waves-effect waves-light theme-color" type="submit">Save
              <i className="material-icons right">send</i></button>

          </Formsy.Form>
      </section>
    );
  }
}

export default AddPhase;
