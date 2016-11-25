import React from 'react';
import ReactMaterialSelect from 'react-material-select';

class Assignproject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAssigning: false,
      err: ''
    }
  }

  assign() {
    this.setState({isAssigning: !this.state.isAssigning, err: ''});
  }

  assignTeam() {
    const {teamId}=this.refs;
    const {assignTeam, userId} = this.props;
    const assignIt = (teamId)=> {
      this.setState({isAssigning: !this.state.isAssigning});
      assignTeam(teamId, userId);
    };
    (teamId.getValue()) ? assignIt(teamId.getValue()) : this.setState({err: `You are required ${'to select a team'}`});
    console.log(teamId.getValue());
  }

  render() {
    const {teams} = this.props;
    const {isAssigning, err} = this.state;
    return (
      <div>
        {err ?
          <span className="error-container">
            <span className="error-text">
                {err}
            </span>
          </span> : null }
        {(isAssigning) ?
          <div>
            <ReactMaterialSelect label="Team" id="Team" ref="teamId">
              {teams.map((team, index) => (
                <option key={index} dataValue={team._id}>
                  {team.name}
                </option>
              ))}
            </ReactMaterialSelect>
            <button class="btn-add btn-sm" onClick={this.assignTeam.bind(this)}>Assign</button>
            <button className="btn btn-sm" onClick={this.assign.bind(this)}>Cancel</button>
          </div>
          : <button className="btn btn-sm btn-cancel" onClick={this.assign.bind(this)}>Assign Team</button>}
      </div>
    );
  }
}

export default Assignproject;
