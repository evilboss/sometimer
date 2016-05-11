import React from 'react';
import Helmet from 'react-helmet';
const AppLayout = ({title, content = () =>null}) =>(
  <div>
    <Helmet title={title}
            meta={[
          {"name": "viewport", "content": "width=device-width, initial-scale=1"}
        ]}/>
    {content()}
  </div>
);

export default AppLayout;


