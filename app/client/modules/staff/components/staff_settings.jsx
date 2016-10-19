import React from 'react';
import StaffMultiSelect from '/client/modules/staff/containers/staff_multi_select';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import {control} from '/lib/access-control/control';

class StaffSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: null,
      ommitList: [],
      permissions: [],
    }
  }

  getData(data) {
    this.setState({staffList: data})
  }

  setInitialPermissions(permissions) {
    console.log(permissions);
    this.setState({permissions: permissions});
  }

  saveTeamList(e) {
    e.preventDefault();
    Meteor.call('teamlist.insert', this.props.staffId, this.state.staffList);
  }

  isChecked(permission) {
    let permissions = this.state.permissions;
    return (_.contains(permissions, permission)) ? 'checked' : '';
  }

  _changePermissions(e) {
    const permission = e.target.attributes.getNamedItem('data-permission').value;
    const hasThisPermission = this.isChecked(permission);
    (hasThisPermission) ? this._removePermissions(permission) : console.log('no');

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
    let permissions = this.state.ommitList;
    permissions.push(permission);
    permissions.push(permission);
    permissions = _.uniq(permissions);
    console.log(permission, permissions);
    this.setState({
      ommitList: permissions
    });
  }

  isChecked(checked) {
    return (checked) ? 'checked' : ''
  }

  render() {
    const {userPermissions, user, permissions} = this.props;
    const {firstName, lastName}= (user) ? (user.profile) ? user.profile : '' : '';
    return (
      <section id="team">
        <Tabs/>
        <PageTitle title="Staff Settings"/>
        <section id="staff-settings">
          <div className="row no-margin-bottom">
            <form onSubmit={this.saveTeamList.bind(this)}>
              <div className="col s12 no-padding">
                <div className="col s6">
                  <div className="input-field col s12">
                    <input id="firstName" ref="firstName" type="text" className="validate"
                           defaultValue={(firstName)?firstName:''}/>
                    <label htmlFor="firstName" className={(firstName) ?'active':''}>First Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="lastName" ref="LastName" type="text" className="validate"
                           defaultValue={(lastName) ? lastName : ''}
                    />
                    <label htmlFor="lastName" className={(lastName) ?'active':''}>Last Name</label>
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
                  <h5>The staff that this user can see</h5>
                  <input name="owner" id="owner" type="hidden" defaultValue={this.props.staffId}/>
                  <StaffMultiSelect getData={this.getData.bind(this)}/>
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
                              <input type="checkbox" defaultValue="true" id="client-view"

                                     data-permission="readClients"/>
                              <label htmlFor="client-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="client-add"/>
                              <label htmlFor="client-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="client-edit"/>
                              <label htmlFor="client-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="client-delete"/>
                              <label htmlFor="client-delete"></label>
                            </td>
                          </tr>
                          <tr>
                            <td>Staff</td>
                            <td className="center">
                              <input type="checkbox" id="staff-view"/>
                              <label htmlFor="staff-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="staff-add"/>
                              <label htmlFor="staff-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="staff-edit"/>
                              <label htmlFor="staff-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="staff-delete"/>
                              <label htmlFor="staff-delete"></label>
                            </td>
                          </tr>
                          <tr>
                            <td>Managers</td>
                            <td className="center">
                              <input type="checkbox" id="managers-view"/>
                              <label htmlFor="managers-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="managers-view"/>
                              <label htmlFor="managers-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="managers-edit"/>
                              <label htmlFor="managers-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="managers-delete"/>
                              <label htmlFor="managers-delete"></label>
                            </td>
                          </tr>

                          <tr>
                            <td>Team Leaders</td>
                            <td className="center">
                              <input type="checkbox" id="leaders-view"/>
                              <label htmlFor="leaders-view"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="leaders-add"/>
                              <label htmlFor="leaders-add"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="leaders-edit"/>
                              <label htmlFor="leaders-edit"></label>
                            </td>
                            <td className="center">
                              <input type="checkbox" id="leaders-delete"/>
                              <label htmlFor="leaders-delete"></label>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        : '' : ''
                    }
                    <div className="right save">
                      <button className="btn theme-color">Save</button>
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

export default StaffSettings;
