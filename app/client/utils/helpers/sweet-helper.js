/**
 *
 * @param e: event
 * @param message: String
 */
const sweetOkPrompt = (message, e)=> {
  e.preventDefault;
  sweetAlert(message);
};

const sweetSucces = (prompt, title, style)=> {
  sweetAlert(prompt, title, style);
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
  sweetSucces: (prompt, title, style)=>sweetSucces(prompt, title, style),
};
export{sweetPrompts};