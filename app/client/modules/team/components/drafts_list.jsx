import React from 'react';

class DraftsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="drafts-list">
        <div className="row draft-item">
          <div className="col s10">
            Advertising Team 2
            <div className="message">
              Continue Creating
            </div>
          </div>
          <i className="right material-icons">cancel</i>
        </div>
      </div>
    );
  }
}

export default DraftsList;
