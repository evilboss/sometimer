/**
 *
 * @param e: event
 * @param message: String
 */
const sweetOkPrompt = (message, e)=> {
  e.preventDefault;
  sweetAlert(message);
};
/**
 *
 * @param e: event
 * @param message: String
 */
const sweetYesNo = (e, message)=> {
};

const sweetPrompts = {
  sweetOkPrompt
};
export{sweetPrompts};

  