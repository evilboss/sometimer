import React from 'react';
import Formsy from 'formsy-react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import ReactMaterialSelect from 'react-material-select';
import CancelBtn from '/client/utils/buttons/cancel_btn';
import StepGuide from '/client/utils/buttons/step_guide';
import {control} from '/lib/access-control/control';

class EditTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: [],
      transfer: false,
    }
  }

  _transfer() {
    this.setState({transfer: !this.state.transfer});
  };

  _confirmTransfer() {
    let {transferTeam, team} = this.props;
    let {newAdmin} = this.refs;
    const updateTeam = {
      creator: newAdmin.getValue()
    };
    transferTeam(team._id, updateTeam);
  }

  _update() {
    let {update, team} = this.props;
    let {name, teamLeader} = this.refs;
    let {staffList} = this.state;
    const updateTeam = {
      name: name.value,
      teamLeader: teamLeader.getValue(),
    };
    update(team._id, updateTeam);
  }

  _delete(teamId) {
    let {deleteTeam} = this.props;
    sweetAlert({
      title: "Confirm Delete?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0a84ad",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      closeOnConfirm: false,
      closeOnCancel: true,
      allowEscapeKey: true,
      allowOutsideClick: true
    }, function (isConfirm) {
      if (isConfirm) {
        deleteTeam(teamId);

      }
    });
  }

  getData(data) {
    this.setState({staffList: data})
  }

  render() {
    const {team, staffList, error, managerList, adminList, currentUser} = this.props;
    const {transfer} = this.state;

    return (
      <section id="team" className="relative">
        <Tabs/>
        <PageTitle title="Edit Team"/>
        {(team) ?
          <button className="btn delete waves-effect waves-light theme-color" type="button"
                  onClick={this._delete.bind(this, team._id)}>Delete Team
            <i className="right material-icons close">
              delete_forever</i></button> : null
        }

        <section id="edit-team" className="twbs col s12">
          <div className="row no-margin-bottom">
            {error ? <div className='error'>
              {error}
            </div> : null}
            {team ? <Formsy.Form>
              <div className="col s12">
                <div className="input-field col s5">
                  <input id="name" ref="name" type="text" className="validate" placeholder="Name of
                    Team / Department"
                         defaultValue={ (team.name) ? team.name : '' }
                  />
                  <label htmlFor="Name of Team / Department" className={(team) ? (team.name) ? 'active' : '' : ''}>Name
                    of
                    Team /
                    Department</label>
                </div>

                <div className="input-field col s5 manager-guide">
                  <ReactMaterialSelect label="Choose a Team Leader/ Manager" ref="teamLeader"
                                       resetLabel="Clear Selected Option"
                                       defaultValue={(team.teamLeader) ? team.teamLeader : ''}>
                    {managerList.map((manager) => (
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
                <div className="input-field col s5">
                  <div>

                    {
                      (control.isAdmin()) ?
                        (transfer) ?
                          <div className="input-field col s12 no-padding">
                            <ReactMaterialSelect label="Select New Admin to manage this Team" ref="newAdmin"
                                                 resetLabel="Clear Selected Option">
                              {adminList.map((staff) => (
                                <option key={staff._id} dataValue={staff._id}>
                                  {(staff.profile) ? `${staff.profile.firstName} ${staff.profile.lastName}` : ''}
                                </option>
                              ))}
                            </ReactMaterialSelect>
                            <div className="tranfer-btn-action col s12 no-padding">
                              <button className="btn cancel inline" onClick={this._transfer.bind(this)}>Cancel Transfer
                              </button>
                              <button className="btn inline" onClick={this._confirmTransfer.bind(this)}>Confirm Transfer
                              </button>
                            </div>
                          </div> :
                          <button className="btn transfer" onClick={this._transfer.bind(this)}>Transfer Team</button>
                        : ''
                    }
                  </div>
                  <CancelBtn route="/dashboard/team/"/>
                  <button className="btn waves-effect waves-light theme-color" type="button"
                          onClick={this._update.bind(this)}>Update Team
                    <i className="material-icons right">send</i></button>
                </div>
              </div>
            </Formsy.Form> : null}

          </div>
        </section>
      </section>
    );
  }
}

export default EditTeam;
