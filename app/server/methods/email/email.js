/**
 * Created by jr on 9/20/16.
 */
import {Email} from 'meteor/email';
const sendMail = (from, to, subject, text, html)=> {
  const mailOptions = {
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text,
    html: html
  };
  Email.send(mailOptions);
}
const remotivMailer = {
  sendMail
};
export{remotivMailer};