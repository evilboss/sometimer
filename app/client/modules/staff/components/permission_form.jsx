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
    const {userPermissions, permissions} = this.props;
    const permissionList = [
      {label: 'Client', types: ['readClients', 'createClients', 'updateClients']},
      {label: 'Staff', types: ['readStaffs', 'createStaffs', 'updateStaffs']},
      {label: 'Manager', types: ['readManagers', 'createManagers', 'updateManagers']},
      {label: 'Team', types: ['readTeam', 'createTeam', 'updateTeam']},
      {label: 'Project', types: ['readProject', 'createProject', 'updateProject']},
      {label: 'Workflow', types: ['readWorkflow', 'createWorkflow', 'updateWorkflow']},
    ];
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
              </tr>
              </thead>
              <tbody>
              {permissionList.map((permission, index)=>
                <tr key={index}>
                  <td>{permission.label}</td>
                  {(permission.types) ?
                    permission.types.map((type, typeIndex)=>
                      <td className="center" key={typeIndex}>
                        <input type="checkbox" defaultValue="true" id={type}
                               defaultChecked={this.isChecked(type)}
                               data-permission={type}/>
                        <label htmlFor={type}></label>
                      </td>
                    )
                    : null
                  }
                </tr>
              )}
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
