import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

class Invitee extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <tr>
      <td>Row 1</td>
      <td>Row 2</td>
      <td>Row 3</td>
      <td>Row 4</td>
    </tr>
    );
  }
}

export default Invitee;

