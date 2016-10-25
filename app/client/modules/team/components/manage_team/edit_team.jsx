import React from 'react';
import Formsy from 'formsy-react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import MyInput from '../../../../utils/form/input';
import TextArea from '../../../../utils/form/textarea';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import ReactMaterialSelect from 'react-material-select';
import 'react-material-select/lib/css/reactMaterialSelect.css';

class EditTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  _update() {
    let {name} = this.refs;
    const team = {};
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

                <div className="input-field col s12">
                  <ReactMaterialSelect label="Choose a Team Leader" ref="teamLeader"
                                       defaultValue={(team) ?(team.teamLeader)?team.teamLeader:'':''}>
                    {staffList.map((staff) => (
                      <option key={staff._id} dataValue={staff._id}>
                        {console.log(staff._id)}
                        {(staff.profile) ? `${staff.profile.firstName} ${staff.profile.lastName}` : ''}
                      </option>
                    ))}
                  </ReactMaterialSelect>
                </div>
                <StaffMultiSelect />
                <button className="btn waves-effect waves-light theme-color" type="button"
                        onClick={this._update.bind(this)}>Update Team
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
