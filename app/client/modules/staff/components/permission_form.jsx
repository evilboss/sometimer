import React from 'react';
import {control} from '/lib/access-control/control';

class PermissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ommitList: [],
      permissions: [],
    }
  }

  setInitialPermissions(permissions) {
    this.setState({permissions: permissions});
  }

  isChecked(permission) {
    const permissions = this.props.permissions;
    return (_.contains(permissions, permission)) ? true : false;
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

  render() {
    const {userPermissions, permissions} = this.props;
    return (
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
                         defaultChecked={this.isChecked('readClients')}
                         data-permission="readClients"/>
                  <label htmlFor="client-view"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="client-add"
                         defaultChecked={this.isChecked('createClients')}
                         data-permission="createClients"/>
                  <label htmlFor="client-add"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="client-edit"
                         defaultChecked={this.isChecked('updateClients')}
                         data-permission="updateClients"/>
                  <label htmlFor="client-edit"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="client-delete"
                         defaultChecked={this.isChecked('deleteClients')}
                         data-permission="deleteClients"/>
                  <label htmlFor="client-delete"></label>
                </td>
              </tr>
              <tr>
                <td>Staff</td>
                <td className="center">
                  <input type="checkbox" id="staff-view"
                         defaultChecked={this.isChecked('readStaffs')}
                         data-permission="readStaffs"/>
                  <label htmlFor="staff-view"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="staff-add"
                         defaultChecked={this.isChecked('createStaffs')}
                         data-permission="createStaffs"/>
                  <label htmlFor="staff-add"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="staff-edit"
                         defaultChecked={this.isChecked('updateStaffs')}
                         data-permission="updateStaffs"/>
                  <label htmlFor="staff-edit"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="staff-delete"
                         defaultChecked={this.isChecked('deleteStaffs')}
                         data-permission="deleteStaffs"/>
                  <label htmlFor="staff-delete"></label>
                </td>
              </tr>
              <tr>
                <td>Managers</td>
                <td className="center">
                  <input type="checkbox" id="managers-view"
                         defaultChecked={this.isChecked('readManagers')}
                         data-permission="readManagers"/>
                  <label htmlFor="managers-view"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="managers-add"
                         defaultChecked={this.isChecked('createManagers')}
                         data-permission="createManagers"/>
                  <label htmlFor="managers-add"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="managers-edit"
                         defaultChecked={this.isChecked('updateManagers')}
                         data-permission="updateManagers"/>
                  <label htmlFor="managers-edit"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="managers-delete"
                         defaultChecked={this.isChecked('deleteManagers')}
                         data-permission="deleteManagers"/>
                  <label htmlFor="managers-delete"></label>
                </td>
              </tr>

              <tr>
                <td>Team Leaders</td>
                <td className="center">
                  <input type="checkbox" id="leaders-view"
                         defaultChecked={this.isChecked('readLeaders')}
                         data-permission="readLeaders"/>
                  <label htmlFor="leaders-view"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="leaders-add"
                         defaultChecked={this.isChecked('createLeaders')}
                         data-permission="createLeaders"/>
                  <label htmlFor="leaders-add"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="leaders-edit"
                         defaultChecked={this.isChecked('updateLeaders')}
                         data-permission="updateLeaders"/>
                  <label htmlFor="leaders-edit"></label>
                </td>
                <td className="center">
                  <input type="checkbox" id="leaders-delete"
                         defaultChecked={this.isChecked('deleteLeaders')}
                         data-permission="deleteLeaders"/>
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
    );
  }
}

export default PermissionForm;
