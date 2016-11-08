import React from 'react';
import UploadFile from '/client/modules/team/containers/upload_file';
import {Darkroom, Canvas, History, Toolbar, FilePicker, CropMenu} from 'react-darkroom';
import {Transform} from '/client/utils/cropper/';
import {uploadToAmazonS3} from '/client/utils/helpers/file_upload';

const canvasWidth = 300;
const canvasHeight = 300;

function fileController(thread = {source: null}, action) {
  switch (action.type) {
    case 'SET_FILE':
      return Object.assign({}, thread, {
        source: action.file,
        angle: 0
      });
    default:
      return thread;
  }
}
function imageController(thread = {crop: false, source: null, angle: 0}, action) {
  switch (action.type) {
    case 'ROTATE_LEFT':
      return Object.assign({}, thread, {
        angle: thread.angle - 90
      });
    case 'ROTATE_RIGHT':
      return Object.assign({}, thread, {
        angle: thread.angle + 90
      });
    case 'START_CROPPING':
      return Object.assign({}, thread, {
        crop: true
      });
    case 'STOP_CROPPING':
      return Object.assign({}, thread, {
        crop: false
      });
    case 'CONFIRM_CROP':
      return Object.assign({}, thread, {
        crop: false,
        source: action.image
      });
    default:
      return thread;
  }
}
function readFile(file, done) {
  var reader = new FileReader();
  reader.onload = e => done(e.target.result);
  reader.readAsDataURL(file);
}


class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: 0, thread: [{crop: false, source: null, angle: 0}]};
    ['onFileChange',
      'update',
      'onRedo',
      'onUndo',
      'onRotateLeft',
      'onCropStart',
      'onCropConfirm',
      'onCropCancel',
      'onRotateRight'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidUpdate() {
    console.timeEnd('State changed');
  }

  update(action) {
    const state = this.state;
    let nextThread;
    let nextStep = state.thread.length;
    let newState;
    let newThread;

    switch (action.type) {
      case "SET_FILE":
        nextThread = fileController(state.thread[state.step], action);
        break;

      case "UNDO":
        nextStep = state.step - 1;
        break;

      case "REDO":
        nextStep = state.step + 1;
        break;

      case "ROTATE_LEFT":
      case "ROTATE_RIGHT":
      case "START_CROPPING":
      case "STOP_CROPPING":
      case "CONFIRM_CROP":
        nextThread = imageController(state.thread[state.step], action);
        break;

    }

    if ((action.type !== "UNDO" && action.type !== "REDO") &&
      (state.step > 0 && state.step < state.thread.length - 1)) {
      newThread = [
        ...state.thread.slice(0, state.step),
        nextThread
      ];
      nextStep = newThread.length - 1;
    } else {
      newThread = nextThread ? [...state.thread, nextThread] : [].concat(state.thread);
    }

    newState = Object.assign({}, state, {
      step: nextStep,
      thread: newThread
    });
    console.time('State changed');
    this.setState(newState);

  }

  onFileChange(e) {

    readFile(e.target.files[0], file => {
      this.update({type: 'SET_FILE', file});
    });
  }

  onUndo() {
    this.update({type: 'UNDO'});
  }

  onRedo() {
    this.update({type: 'REDO'});
  }

  onRotateLeft() {
    this.update({type: 'ROTATE_LEFT'});
  }

  onRotateRight() {
    this.update({type: 'ROTATE_RIGHT'});
  }

  onCropStart() {
    this.update({type: 'START_CROPPING'});
  }

  onCropCancel() {
    this.update({type: 'STOP_CROPPING'});
  }

  onCropConfirm() {

    let {source} = this.state.thread[this.state.step];
    let {x, y, width, height} = this.refs.canvasWrapper.cropBox;

    let newImage = Transform.cropImage(source, {x, y, width, height}, {width: canvasWidth, height: canvasHeight})
      .then(image => this.update({type: 'CONFIRM_CROP', image}));


  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  onSave(event) {
    let {fileselect}=this.refs;
    let {source} = this.state.thread[this.state.step];
    console.log(fileselect.files[0]);
    uploadToAmazonS3.upload({file: fileselect.files[0]}, "updateDisplayPhoto");
  }


  render() {
    const user = Meteor.user();
    let current = this.state.thread[this.state.step];
    let {angle, source, crop} = current;
    let hasFile = source !== null;

    let selectFile = () => {
      this.refs.fileselect.click();
    };
    return (
      <section id="edit-profile">
        <h5 className="title">Edit Profile</h5>
        {(user) ?
          <div className="row">
            <div className="col s12 center-align">
              <img
                src={(user.profile.displayPhoto)?user.profile.displayPhoto:'/uploads/defaults/default_user.png'}
                alt="dp"
                className="display-photo responsive-img center-block"/>
              <UploadFile methodType="updateDisplayPhoto" text="Change Display Photo"/>
              <Darkroom>
                <Toolbar>
                  <button onClick={selectFile} data-tipsy="Select Image" className="tipsy tipsy--s">
                    <i className="material-icons">photo</i>
                    <input type="file" ref="fileselect" onChange={this.onFileChange} style={{display: 'none'}}/>
                  </button>
                  <button disabled={!hasFile} onClick={this.onRotateLeft} data-tipsy="Rotate Left"
                          className="tipsy tipsy--sw">
                    <i className="material-icons">rotate_left</i>
                  </button>
                  <button disabled={!hasFile} onClick={this.onRotateRight} data-tipsy="Rotate Right"
                          className="tipsy tipsy--sw">
                    <i className="material-icons">rotate_right</i>
                  </button>
                  <CropMenu isCropping={crop}>
                    <button disabled={!hasFile} data-showOnlyWhen='croppingIsOff' onClick={this.onCropStart}
                            data-tipsy="Crop" className="tipsy tipsy--sw">
                      <span className="icon icon-crop"/>croppingIsOff
                    </button>
                    <button disabled={!hasFile} data-showOnlyWhen='croppingIsOn' style={{color: 'cyan'}}>
                      <span className="icon icon-crop"/>
                      croppingIsOn
                    </button>
                    <button disabled={!hasFile} data-showOnlyWhen='croppingIsOn' onClick={this.onCropConfirm}
                            style={{color: 'green'}} data-tipsy="Confirm" className="tipsy tipsy--sw">
                      <span className="icon icon-checkmark"/>
                      croppingIsOn
                    </button>
                    <button disabled={!hasFile} data-showOnlyWhen='croppingIsOn' onClick={this.onCropCancel}
                            style={{color: 'red'}} data-tipsy="Cancel" className="tipsy tipsy--sw">
                      <span className="icon icon-cross"/>
                      croppingIsOn
                    </button>
                  </CropMenu>
                  <button disabled={!hasFile} onClick={this.onSave.bind(this)} data-tipsy="Save"
                          className="tipsy tipsy--sw">
                    Save
                  </button>
                </Toolbar>
                <Canvas ref="canvasWrapper" crop={crop} source={source} angle={angle} width={canvasWidth}
                        height={canvasHeight}>
                  <FilePicker hasFile={hasFile} onChange={this.onFileChange}/>
                </Canvas>
              </Darkroom>

            </div>
          </div>
          : ''}
      </section>
    );
  }
}

export default ProfileEdit;
