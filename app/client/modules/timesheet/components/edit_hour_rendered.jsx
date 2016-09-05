import React from 'react';

class EditHourRendered extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    $('.modal-trigger').leanModal();
    $('select').material_select();
  }

  changeTimeData(event) {
    event.preventDefault();
    let min = this.refs.mins.value;
    let hour = this.refs.hours.value;
    Meteor.call('timelogs.editLogs', this.props.target, hour + ':' + min + ':00');

    console.log('changing time', hour, min);
    $('#' + this.props.target).closeModal();

  }

  render() {
    return (
      <div id={this.props.target} className="modal">
        <form ref="edithoursrenderedForm" onSubmit={this.changeTimeData.bind(this)}>
          <div className="modal-content">
            <h4 className="modal-title" id="send-invitation">Hours Rendered</h4>
            <div className="modal-body">

              <div className="row">
                <div className="input-field col s6">
                  <select ref="hours" name="hours">
                    <option value="" disabled selected>Choose your option</option>
                    <option value=""></option>
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  <label>Hours</label>
                </div>
                <div className="input-field col s6">
                  <select ref="mins" name="mins">
                    <option value="" disabled selected>Choose your option</option>
                    <option value=""></option>
                    <option value="00">00</option>
                    <option value="05">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                  </select>
                  <label>Minutes</label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditHourRendered;
