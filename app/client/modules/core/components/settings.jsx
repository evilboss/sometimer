import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import UploadFile from '/client/modules/team/containers/upload_file';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {sitePhoto} = this.props;
    return (
      <section id="settings">
        <PageTitle title="Settings"/>
        <div className="row">
          <div className="col s12 center-align">
            <img
              src={(sitePhoto) ? sitePhoto : '/Assets/teams/default/logo/Remotiv_logo_horizontal_onblack.png'}
              alt="dp"
              className="display-photo responsive-img center-block"/>
            <UploadFile methodType="updateSitePhoto" text="Change Site Logo"/>
          </div>
        </div>
      </section>
    );
  }
}


export default Settings;
