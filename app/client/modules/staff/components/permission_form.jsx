import React from "react";
import {control} from "/lib/access-control/control";

class PermissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ommitList: [],
      permissions: [],
    }
  }

  isChecked(permission) {
    const {permissions} = this.props;
    const result = (_.contains(permissions, permission)) ? true : false;
    return result;
  }

  _changePermissions(e) {
    const permission = e.target.attributes.getNamedItem('data-permission').value;
    (e.target.checked) ? this._addToPermissions(permission) : this._removePermissions(permission);

  };

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
    this.setState({
      permissions: permissions
    });
  }

  _updatePermissions() {
    const {user, updatePermissions} = this.props;
    /*TODO: need to find a way how to get all checked items*/
    console.info('updating permissions');
    updatePermissions(user._id, this.state.permissions);
  }

  render() {
    const {userPermissions, permissions, user} = this.props;
    const {profile} = (user) ? user : '';
    const {role} = (profile) ? profile : '';
    const permissionList = [
      {
        label: 'Client',
        types: ['readClients', 'createClients', 'updateClients'],
        userTypes: ['super-admin', 'admin', 'manager']
      },
      {
        label: 'Staff',
        types: ['readStaffs', 'createStaffs', 'updateStaffs'],
        userTypes: ['super-admin', 'admin', 'manager']
      },
      {
        label: 'Manager',
        types: ['readManagers', 'createManagers', 'updateManagers'],
        userTypes: ['super-admin', 'admin']
      },
      {label: 'Team', types: ['readTeam', 'createTeam', 'updateTeam'], userTypes: ['super-admin', 'admin', 'manager']},
      {
        label: 'Project',
        types: ['readProject', 'createProject', 'updateProject'],
        userTypes: ['super-admin', 'admin', 'manager', 'staff']
      },
      {
        label: 'Workflow',
        types: ['readWorkflow', 'createWorkflow', 'updateWorkflow'],
        userTypes: ['super-admin', 'admin', 'manager', 'staff']
      },
      {
        label: 'Admin',
        types: ['readAdmin', 'createAdmin', 'updateAdmin'],
        userTypes: ['super-admin', 'admin']
      }
    ];
    let currentUserPermission = 'no-permission-for-this';

    switch (role) {
      case 'staff':
        currentUserPermission = 'updateStaffs';
        break;
      case 'manager':
        currentUserPermission = 'updateManagers';
        break;
      case 'admin':
        currentUserPermission = 'updateAdmin';
        break;
      default:
    }
    return (
      <div className="col s8 no-padding">
        {
          (userPermissions) ?
            <div className="col s12 no-padding">
              <div className="class-info">
                SET SYSTEM PERMISSIONS
              </div>
              <table>
                <thead>
                <tr>
                  <th>Permissions for</th>
                  <th className="center">View</th>
                  <th className="center">Add</th>
                  <th className="center">Edit</th>
                </tr>
                </thead>
                <tbody>
                {permissionList.map((permission, index) =>
                  (_.contains(permission.userTypes, role)) ?
                    <tr key={index}>
                      <td>{permission.label}</td>
                      {(permission.types) ?
                        permission.types.map((type, typeIndex) =>
                          <td className="center" key={typeIndex}>
                            <input type="checkbox" defaultValue="true" id={type}
                                   defaultChecked={this.isChecked(type)}
                                   data-permission={type}
                                   onChange={this._changePermissions.bind(this)}
                            />
                            <label htmlFor={type}></label>
                          </td>
                        )
                        : null
                      }
                    </tr> : null
                )}
                </tbody>
              </table>
              {

                control.isPermitted(currentUserPermission, userPermissions) ?
                  <div className="right save">
                    <button onClick={this._updatePermissions.bind(this)} className="btn theme-color">Update Permissions
                    </button>
                  </div>
                  : ''}
            </div>
            : ''
        }
      </div>
    );
  }
}

export default PermissionForm;
