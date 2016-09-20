import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="create-team">
        <PageTitle title="Create Team"/>
        CreateTeam
      </section>
    );
  }
}

export default CreateTeam;
