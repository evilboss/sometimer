import React from 'react';

class Datepicker extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      closeOnSelect: true
    });
    var from_$input = $('#input_from').pickadate(),
      from_picker = from_$input.pickadate('picker');

    var to_$input = $('#input_to').pickadate(),
      to_picker = to_$input.pickadate('picker');


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

  render() {
    return (
      <div className="no-horizontal-margin row z-depth-1-half card-top-border">
        <form className="col s12">
          <h5>View Timesheet</h5>
          <div className="row">
            <div className="input-field col s12 m5 l5">
              <input type="date" name="date-from" id="input_from" className="datepicker"/>
              <label htmlFor="date-from">Date from</label>
            </div>
            <div className="input-field col s12 m5 l5">
              <input type="date" name="date-to" id="input_to" className="datepicker"/>
              <label htmlFor="date-to">Date To</label>
            </div>
            <div className="col s12 m2 l2">
              <button className="ui btn waves-effect waves-light theme-color no-horizontal-padding full-width">View
                TimeSheet
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Datepicker;
