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
/**
 *
 * @param e: event
 * @param message: String
 */
const sweetYesNo = (e, message)=> {
};

const sweetPrompts = {
  sweetOkPrompt,
  sweetSucces: (prompt, title, style, path)=>sweetSucces(prompt, title, style, path),
};
export{sweetPrompts};