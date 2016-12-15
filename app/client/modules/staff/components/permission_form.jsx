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
    this.setState({
      ommitList: permissions
    });
  }

  render() {
    const {userPermissions, permissions, user} = this.props;
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
    return (
      <div className="col s8 no-padding">
        {
          (userPermissions) ? control.isPermitted('updatePermissions', userPermissions) ?
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
                  (_.contains(permission.userTypes, user.profile.role)) ?
                    <tr key={index}>
                      <td>{permission.label}</td>
                      {(permission.types) ?
                        permission.types.map((type, typeIndex) =>
                          <td className="center" key={typeIndex}>
                            <input type="checkbox" defaultValue="true" id={type}
                                   defaultChecked={this.isChecked(type)}
                                   data-permission={type}/>
                            <label htmlFor={type}></label>
                          </td>
                        )
                        : null
                      }
                    </tr> : null
                )}
                </tbody>
              </table>
              <div className="right save">
                <button className="btn theme-color">Update Permissions</button>
              </div>
            </div>
            : '' : ''
        }
      </div>
    );
  }
}

export default PermissionForm;
