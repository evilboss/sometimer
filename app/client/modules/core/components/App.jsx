import React from 'react';
import Notifications from '../libs/notify';
import Helmet from 'react-helmet';

export default class App extends React.Component {

  render(){
    return(
      <div className="app-root container">
        <Helmet title="Remotiv"
        meta={[
          {"name": "viewport", "content": "width=device-width, initial-scale=1"}
        ]} />
      </div>
    );
  }
}
