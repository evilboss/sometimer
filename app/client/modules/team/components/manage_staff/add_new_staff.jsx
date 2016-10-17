import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';

import SubTabs from '/client/modules/team/containers/sub_tabs';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import {control} from '/lib/access-control/control';

class AddNewStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: []
    }
  }

  _create() {
    const {create} = this.props;
    const {name, department, position, dateHired, email, positionDescription} = this.refs;
    const user = {
      profile: {
        firstName: firstName.value,
        lastName: lastName.value,
        department: department.value,
        position: position.value,
        dateHired: dateHired.value,
        positionDescription: positionDescription.value,
        permissions: this.state.permissions
      },
      email: email.value,
    };
    create(user);
  }

  _renderError(error) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }

  _changePermissions(e) {
    const permission = e.target.attributes.getNamedItem('data-permission').value;
    (e.target.checked) ? this._addToPermissions(permission) : this._removePermissions(permission);
  }

  _addToPermissions(permission) {
    let permissions = this.state.permissions;
    permissions.push(permission);
    permissions = _.uniq(permissions);
    this.setState({
      permissions: permissions
    });
  }

  _removePermissions(permission) {
    let permissions = this.state.permissions;
    const index = permissions.indexOf(permission);
    permissions.splice(index, 1);
    console.log(permissions);
    this.setState({
      permissions: permissions
    });
  }

  render() {

    const {userPermissions, error} = this.props;
    return (
      <section id="team">
        <Tabs/>
        <PageTitle title="Add a New Staff"/>
        <section id="add-new-staff">
          <div className="row no-margin-bottom">
            <form ref="inviteForm">
              <div className="col s12 no-padding">
                {error ? this._renderError(error) : null}
                <div className="col s6">
                  <div className="input-field col s12">
                    <input id="firstName" ref="firstName" type="text" className="validate"/>
                    <label htmlFor="name">First Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="lastName" ref="lastName" type="text" className="validate"/>
                    <label htmlFor="name">Last Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="department" ref="department" type="text" className="validate"/>
                    <label htmlFor="department">Department</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="position" ref="position" type="text" className="validate"/>
                    <label htmlFor="position">Position</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="dateHired" ref="dateHired" type="text" className="validate"/>
                    <label htmlFor="dateHired">Date Hired (optional)</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="email" ref="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
          <textarea ref='positionDescription' className="materialize-textarea">
        </textarea>
                    <label htmlFor="textarea1">Brief description of position (optional)</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="col s12">
                    {
                      (userPermissions) ? control.isPermitted('updatePermissions', userPermissions) ?
                        <table>
                          <thead>
                          <tr>
                            <th>Set Permissions</th>
                            <th className="center">View</th>
                            <th className="center">Add</th>
                            <th className="center">Edit</th>
                            <th className="center">Delete</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Clients</td>
                            <td className="center">
                              <input type="checkbox" id="client-view"
                                     data-permission="readClients" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="client-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="client-add"
                                     data-permission="createClients" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="client-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="client-edit"
                                     data-permission="updateClients" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="client-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="client-delete"
                                     data-permission="deleteClients" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="client-delete"></label>
                            </td>
                          </tr>
                          <tr>


                            <td>Staff</td>
                            <td className="center">
                              <input type="checkbox" id="staff-view"
                                     data-permission="readStaffs" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="staff-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="staff-add"
                                     data-permission="createStaffs" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="staff-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="staff-edit"
                                     data-permission="updateStaffs" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="staff-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="staff-delete"
                                     data-permission="deleteStaffs" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="staff-delete"></label>
                            </td>
                          </tr>
                          <tr>

                            <td>Managers</td>
                            <td className="center">
                              <input type="checkbox" id="managers-view"
                                     data-permission="readManagers" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="managers-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="managers-add"
                                     data-permission="createManagers" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="managers-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="managers-edit"
                                     data-permission="updateManagers" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="managers-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="managers-delete"
                                     data-permission="deleteManagers" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="managers-delete"></label>
                            </td>
                          </tr>
                          
                          <tr>
                            <td>Team Leaders</td>
                            <td className="center">
                              <input type="checkbox" id="leaders-view"
                                     data-permission="readLeaders" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="leaders-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="leaders-add"
                                     data-permission="createLeaders" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="leaders-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="leaders-edit"
                                     data-permission="updateLeaders" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="leaders-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="leaders-delete"
                                     data-permission="deleteLeaders" onChange={this._changePermissions.bind(this)}/>
                              <label htmlFor="leaders-delete"></label>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        : null : null
                    }
                    <div className="right save">
                      <button type="button" className="btn" onClick={this._create.bind(this)}>
                        Save and Invite
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}

export default AddNewStaff;
