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
        <p><strong>Note</strong>: only <code>.png</code>, <code>.jpeg</code>, and <code>.gif</code> files are allowed in
          this demo.</p>
        <h4 className="page-header">Upload a File to Amazon S3</h4>
        <div className="upload-area">
          <form id="upload">
            <p className="alert alert-success text-center">
              <span>Click or Drag a File Here to Upload</span>
              <input onChange={this.fileChange.bind(this)} ref="file" type="file"/>
            </p>
            <button type="button" onClick={this.uploadFile.bind(this)}>Upload</button>
          </form>
          {console.log(file)
          }
          <img src={file}/>
        </div>
      </div>
    );
  }
}
export default UploadFile;
