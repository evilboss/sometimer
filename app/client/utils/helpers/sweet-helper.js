/**
 *
 * @param e: event
 * @param message: String
 */
const sweetOkPrompt = (message, e) => {
  e.preventDefault;
  sweetAlert(message);
};
/**
 *
 * @param prompt
 * @param title
 * @param style
 * @param path
 */
const sweetSucces = (prompt, title, style, path) => {
  event.preventDefault();
  console.log(path);
  swal({
    title: title,
    text: prompt,
    type: style,
    confirmButtonText: "Ok",
    closeOnConfirm: true,
    html: true
  }, () => {
    console.log('callback', path);
    (path) ? FlowRouter.go(path) : '';
  });
  //sweetAlert(prompt, title, style,()=>{console.log('callback')});
};

const sweetIfElseSucces = (prompt, title, style, reRoute, target) => {
  event.preventDefault();
  swal({
    title: title,
    text: prompt,
    type: style,
    showCancelButton: true,
    confirmButtonText: target.text,
    cancelButtonText: reRoute.text,
    closeOnConfirm: true,
    closeOnCancel: true,
    html: false
  }, (isConfirm) => {
    if (isConfirm) {
      FlowRouter.go(target.path)
    } else {
      location.reload();
    }
  });


};
/**
 *
 * @param e: event
 * @param message: String
 */
const sweetYesNo = (e, message) => {
};

const sweetPrompts = {
  sweetOkPrompt,
  sweetIfElseSucces: (prompt, title, style, reRoute, path) => sweetIfElseSucces(prompt, title, style, reRoute, path),
  sweetSucces: (prompt, title, style, path) => sweetSucces(prompt, title, style, path),
};
export{sweetPrompts};