import React from 'react';
import LeftWrapper from './left_wrapper';
import RightWrapper from './right_wrapper';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="create-team">
        <div className="row no-vertical-margin">

          <LeftWrapper />
          <RightWrapper />

        </div>
      </section>
    );
  }
}

export default CreateTeam;
