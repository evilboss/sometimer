import React from 'react';
import {uploadToAmazonS3} from '/client/utils/helpers/file_upload';
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      file: ''
    }
  }

  uploadFile() {
    let {file} = this.refs;
    console.log(file.value);
  }

  fileChange(event) {
    let {methodType} = this.props;
    uploadToAmazonS3.upload({event: event}, methodType);
  }

  render() {
    let {methodType} = this.props;
    let {file} = this.states;
    return (
      <div>
        <h5>Change Display Photo</h5>
        <p><strong>Note</strong>: only <code>.png</code>, <code>.jpeg</code></p>
        <div className="upload-area col s4">
          <form id="upload">
            <div className="file-field input-field">
              <div className="btn theme-color">
                <span>Upload File</span>
                <input onChange={this.fileChange.bind(this)} ref="file" type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" onChange={this.fileChange.bind(this)} ref="file" type="text"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default UploadFile;
