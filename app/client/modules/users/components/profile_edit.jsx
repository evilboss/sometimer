import React from "react";
import {Transform} from "/client/utils/cropper/";
import {uploadToAmazonS3} from "/client/utils/helpers/file_upload";
import PageTitle from "/client/modules/core/components/page_title";

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

  updateAccount() {
    console.info('starting to update account');
    const user = Meteor.user();
    const {profileUpdate} = this.props;
    let {firstName, lastName, position, email, country, contactNumber, skypeID} = this.refs;
    const profile = {
      firstName: firstName.value,
      lastName: lastName.value,
      country: country.value,
      contactNumber: contactNumber.value,
      skypeID: skypeID.value,
      position: position.value,
    };
    profileUpdate(user._id, profile);
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
    let {source} = this.state.thread[this.state.step];
    console.log(source);
    uploadToAmazonS3.upload({file: source}, "updateDisplayPhoto");
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
        <PageTitle title='Account Information'/>
        {(user) ?
          <div className="row">
            <div className="col s12 m3 l3 edit-photo">
              <img
                src={(user.profile.displayPhoto) ? user.profile.displayPhoto : '/uploads/defaults/default_user.png'}
                alt="dp"
                className="display-photo responsive-img center-block"/>
            </div>
            <div className="col s12 m4 l4 no-horizontal-margin row">

              <form ref="updateAccountForm" className="twbs">

                <div className="col s12 no-padding">
                  <div className="input-field">
                    <input placeholder="First Name" id="firstName" ref="firstName" type="text"
                           className="validate" defaultValue={(user.profile.firstName) ? user.profile.firstName : ''}/>
                    <label htmlFor="firstName" className="active required">First Name</label>
                  </div>
                </div>
                <div className="col s12 no-padding">
                  <div className="input-field">
                    <input placeholder="Last Name" id="lastName" ref="lastName" type="text"
                           className="validate" defaultValue={(user.profile.lastName) ? user.profile.lastName : ''}/>
                    <label htmlFor="lastName" className="active required">Last Name</label>
                  </div>
                </div>
                <div className="col s12 no-padding">
                  <div className="input-field">
                    <input placeholder="Country" id="country" ref="country" type="text"
                           className="validate" defaultValue={(user.profile.country) ? user.profile.country : ''}/>
                    <label htmlFor="country" className="active">Country</label>
                  </div>
                </div>
                <div className="col s12 no-padding">
                  <div className="input-field">
                    <input placeholder="Position" id="country" ref="position" type="text"
                           className="validate" defaultValue={(user.profile.position) ? user.profile.position : ''}/>
                    <label htmlFor="position" className="required active">Position</label>
                  </div>
                </div>
                <div className="col s12 no-padding">
                  <div className="input-field">
                    <input placeholder="SkypeID" id="skypeID" ref="skypeID" type="text"
                           className="validate" defaultValue={(user.profile.skypeID) ? user.profile.skypeID : ''}/>
                    <label htmlFor="SkypeID" className="active">SkypeID</label>
                  </div>
                </div>
                <div className="col s12 no-padding">
                  <div className="input-field">
                    <input placeholder="Contact Number" id="contactNumber" ref="contactNumber" type="text"
                           className="validate"
                           defaultValue={(user.profile.contactNumber) ? user.profile.contactNumber : ''}/>
                    <label htmlFor="contactNumber" className="active">Contact Number</label>
                  </div>
                </div>
                <div className="col s12 no-padding">
                  <a href="/dashboard/profile" className="btn cancel">Cancel</a>
                  <button type="button" onClick={this.updateAccount.bind(this)} className="btn theme-color">Update
                    Account
                  </button>
                </div>
              </form>

            </div>
          </div>
          : ''}
      </section>
    );
  }
}

export default ProfileEdit;
