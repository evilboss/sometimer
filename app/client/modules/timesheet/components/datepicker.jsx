import React from 'react';

class Datepicker extends React.Component {
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

    const from_input = $('#input_from').pickadate(),
      from_picker = from_input.pickadate('picker');
    const to_input = $('#input_to').pickadate(),
      to_picker = to_input.pickadate('picker');

// Check if there’s a “from” or “to” date to start with.
    if (from_picker.get('value')) {
      to_picker.set('min', from_picker.get('select'))
    }
    if (to_picker.get('value')) {
      from_picker.set('max', to_picker.get('select'))
    }
    from_picker.on('set', function (event) {
      if (event.select) {
        to_picker.set('min', from_picker.get('select'))
      }
      else if ('clear' in event) {
        to_picker.set('min', false)
      }
    });
    to_picker.on('set', function (event) {
      if (event.select) {
        from_picker.set('max', to_picker.get('select'))
      }
      else if ('clear' in event) {
        from_picker.set('max', false)
      }
    })
  }

  submitForm(e) {
    e.preventDefault();
    alert(this.refs.input_from.value + this.refs.input_to.value);
  }

  render() {
    return (
      <div className="no-horizontal-margin row z-depth-1-half card-top-border">
        <form className="col s12" onSubmit={this.submitForm.bind(this)}>
          <h5>View Timesheet</h5>
          <div className="row">
            <div className="input-field col s12 m5 l5">
              <input type="date" name="input_from" ref="input_from" id="input_from" className="datepicker"/>
              <label htmlFor="date-from">Date from</label>
            </div>
            <div className="input-field col s12 m5 l5">
              <input type="date" name="date-to" ref="input_to" id="input_to" className="datepicker"/>
              <label htmlFor="date-to">Date To</label>
            </div>
            <div className="col s12 m2 l2">
              <button type="submit"
                      className="ui btn waves-effect waves-light theme-color no-horizontal-padding full-width">
                View TimeSheet
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Datepicker;
