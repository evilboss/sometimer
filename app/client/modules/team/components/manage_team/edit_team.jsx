import React from 'react';
import Formsy from 'formsy-react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import ReactMaterialSelect from 'react-material-select';
import CancelBtn from '/client/utils/buttons/cancel_btn';
//import 'react-material-select/lib/css/reactMaterialSelect.css';
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
      members: staffList
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
    const {team, staffList, error, managerList, adminList} = this.props;
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
                <div className="input-field col s12">
                  <input id="name" ref="name" type="text" className="validate"
                         defaultValue={ (team.name) ? team.name : '' }
                  />
                  <label htmlFor="Name of Team / Department" className={(team) ? (team.name) ? 'active' : '' : ''}>Name
                    of
                    Team /
                    Department</label>
                </div>

                <div className="input-field col s12">
                  <ReactMaterialSelect label="Choose a Team Leader" ref="teamLeader"
                                       defaultValue={(team.teamLeader) ? team.teamLeader : ''}>
                    {managerList.map((staff) => (
                      <option key={staff._id} dataValue={staff._id}>

                        {(staff.profile) ? `${staff.profile.firstName} ${staff.profile.lastName}` : ''}
                      </option>
                    ))}
                  </ReactMaterialSelect>
                </div>
                <div className="input-field">
                  <StaffMultiSelect selectedValues={team.members} getData={this.getData.bind(this)}/>
                </div>
                <div className="input-field">
                  {(transfer) ?
                    <div>
                      <ReactMaterialSelect label="Select New Admin to manage this Team" ref="newAdmin">
                        {adminList.map((staff) => (
                          <option key={staff._id} dataValue={staff._id}>
                            {(staff.profile) ? `${staff.profile.firstName} ${staff.profile.lastName}` : ''}
                          </option>
                        ))}
                      </ReactMaterialSelect>
                      <button className="btn cancel" onClick={this._transfer.bind(this)}>Cancel Transfer</button>
                      <button className="btn" onClick={this._confirmTransfer.bind(this)}>Confirm Transfer</button>
                    </div> :
                    <button className="btn" onClick={this._transfer.bind(this)}>Transfer</button>
                  }
                </div>

                <CancelBtn route="/dashboard/team/"/>
                <button className="btn waves-effect waves-light theme-color" type="button"
                        onClick={this._update.bind(this)}>Update Team
                  <i className="material-icons right">send</i></button>
              </div>
            </Formsy.Form> : null}

          </div>
        </section>
      </section>
    );
  }
}

export default EditTeam;
