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
      <div className="twbs">
        {err ?
          <span className="error-container">
            <span className="error-text">
                {err}
            </span>
          </span> : null }
        {(isAssigning) ?
          <div>
            <div className="col s7">
              <div className="input-field no-margin">
                <ReactMaterialSelect label="Team" id="Team" ref="teamId">
                  {teams.map((team, index) => (
                    <option key={index} dataValue={team._id}>
                      {team.name}
                    </option>
                  ))}
                </ReactMaterialSelect>
              </div>
            </div>
            <div className="col s5 assign-action">
              <button className="btn cancel" onClick={this.assign.bind(this)}>Cancel</button>
              <button className="btn theme-color" onClick={this.assignTeam.bind(this)}>Assign</button>
            </div>
          </div>
          : <button className="btn theme-color" onClick={this.assign.bind(this)}>Assign Team</button>}
      </div>
    );
  }
}

export default Assignproject;
