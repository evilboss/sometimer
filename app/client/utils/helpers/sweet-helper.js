/**
 *
 * @param e: event
 * @param message: String
 */
const sweetOkPrompt = (message, e)=> {
  e.preventDefault;
  sweetAlert(message);
};

const sweetSucces = (prompt, title, style, path)=> {
  event.preventDefault();
  console.log(path);
  swal({
    title: title,
    text: prompt,
    type: style,
    confirmButtonText: "Ok",
    closeOnConfirm: true,
    html: false
  }, ()=> {
    console.log('callback', path);
    (path) ? FlowRouter.go(path) : '';
  });
  //sweetAlert(prompt, title, style,()=>{console.log('callback')});
};

const sweetIfElseSucces = (prompt, title, style, reRoute, path)=> {
  event.preventDefault();
  console.log(path);
  swal({
    title: title,
    text: prompt,
    type: style,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel plx!",
    closeOnConfirm: true,
    closeOnCancel: true,
    html: false
  }, (isConfirm)=> {
    if (isConfirm) {
      swal("Deleted!", "Your imaginary file has been deleted.", "success");
    } else {
      swal("Cancelled", "Your imaginary file is safe :)", "error");
    }
  });


};
/**
 *
 * @param e: event
 * @param message: String
 */
const sweetYesNo = (e, message)=> {
};

const sweetPrompts = {
  sweetOkPrompt,
  sweetIfElseSucces: (prompt, title, style, reRoute, path)=>sweetIfElseSucces(prompt, title, style, reRoute, path),
  sweetSucces: (prompt, title, style, path)=>sweetSucces(prompt, title, style, path),
};
export{sweetPrompts};