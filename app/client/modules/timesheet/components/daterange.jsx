import React from 'react';
import moment from 'moment';
import {DateRange} from 'react-date-range';

class Daterange extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      'rangePicker': {}
    }
  }

  componentDidMount() {
    $('.modal-trigger').leanModal({
      dismissible: true,
      opacity: 0.5,
      in_duration: 300,
      out_duration: 200,
      auto: true,
      ready: function () {
        if ($(".lean-overlay").length > 1) {
          $(".lean-overlay:not(:first)").each(function () {
            $(this).remove();
          });
        }
      },
      complete: function () {
        $(".lean-overlay").each(function () {
          $(this).remove();
        });
      }
    });

    $('select').material_select();
  }


  closeModal(e) {
    e.preventDefault();
    const {customId} = this.props;
    console.log('#'+(customId)?customId:'daterange-modal');
    $('#'+(customId)?customId:'daterange-modal').closeModal({
      ready: function () {
        if ($(".lean-overlay").length > 1) {
          $(".lean-overlay:not(:first)").each(function () {
            $(this).remove();
          });
        }
      },
      complete: function () {
        $(".lean-overlay").each(function () {
          $(this).remove();
        });
      }
    });

  }

  handleChange(which, dateRange) {
    this.setState({
      [which]: dateRange
    });
    const format = 'YYYY-MM-DD';
    this.props.changeDate({[which]: dateRange}.rangePicker['startDate'].format(format), {[which]: dateRange}.rangePicker['endDate'].format(format));
  }

  render() {
    const {customId} = this.props;
    const {rangePicker} = this.state;
    const format = 'dddd, D MMMM YYYY';
    return (
      <section className="daterange">
        <div className="form-group right">
          <div className="inline input-field col s6">
            <input
              type='text'
              readOnly
              value={ rangePicker['startDate'] && rangePicker['startDate'].format(format).toString() }
              data-target={(customId) ? customId : 'daterange-modal'}
              id="from"
              className="modal-trigger inline"
              data-toggle="modal"
            />
            <label className="active" htmlFor="from">View Date Range</label>
          </div>
          <div className="inline input-field col s6">
            <input
              type='text'
              readOnly
              value={ rangePicker['endDate'] && rangePicker['endDate'].format(format).toString() }
              data-target={(customId) ? customId : 'daterange-modal'}
              className="modal-trigger"
              data-toggle="modal"
            />
          </div>
        </div>

        <div id={(customId) ? customId : 'daterange-modal'} className="modal">
          <div className="modal-content">
            <h4 className="modal-title">Date Range</h4>
            <div className="modal-body">
              <DateRange
                linkedCalendars={ true }
                onInit={ this.handleChange.bind(this, 'rangePicker') }
                onChange={ this.handleChange.bind(this, 'rangePicker') }/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn theme-color waves-effect" onClick={this.closeModal.bind(this)}>OK
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Daterange;
