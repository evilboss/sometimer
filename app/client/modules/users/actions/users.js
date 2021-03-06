import {control} from '/lib/access-control/control';
import {domainHelpers} from "/client/utils/helpers/domain-helpers";

export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {
    const userId = Meteor.userId();
    const user = Meteor.user();
    const {site} = (user) ? user.profile : '';
    let path = '/dashboard/team';

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Email & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      if (control.isSuperAdmin(userId)) {
        FlowRouter.go(path);
      } else {
        if (site) {
          if (site == domainHelpers.getSubdomain()) {
            FlowRouter.go(path);
          }
          else {
            return LocalState.set('LOGIN_ERROR', 'You are not allowed in this Company sub-domain');
          }
        }
      }
    });
  },
  recoverPassword({Meteor, LocalState}, email) {
    console.log(email);
    Accounts.forgotPassword({email: email}, (err) => {
      if (err && err.reason) {
        return LocalState.set('EMAIL_ERROR', err.reason);
      }
      else {
        alert("Email sent. Please check your mail account.");
      }
    });
  },

  reset_password({Meteor, LocalState}, token, password, repeatPassword) {
    if (password != repeatPassword) {
      notify.show("Passwords don't match.", 'error');
    } else {
      Accounts.resetPassword(token, password, (err) => {
        if (err) {
          notify.show(err.message, 'error');
        } else {
          notify.show("New password has been saved.", 'success');
          FlowRouter.go("/login");
        }
      });
    }
  },

  change_password({Meteor, LocalState}, oldPassword, newPassword) {
    Accounts.changePassword(oldPassword, newPassword, (err) => {
      if (err) {
        sweetAlert("Oops...", err, "error");
      } else {
        sweetAlert("Success!", "Click OK to close", "success");
      }
    });
  },

  change_username({Meteor, LocalState}, username) {
    Meteor.call('user.update', {username: username}, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        notify.show("New username has been saved.", 'success');
      }
    });
  },

  change_email({Meteor, LocalState}, email) {
    Meteor.call('user.update', {email: email}, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        notify.show("New email has been saved.", 'success');
        FlowRouter.go("/email-verification");
      }
    });
  },

  verify_email({Meteor, LocalState}, token) {
    var result = true;
    Accounts.verifyEmail(token, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        result = true;
      }
    });
    return result;
  },

  send_verification_email({Meteor, LocalState}) {
    Meteor.call("user.send_verification_email", (err) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        FlowRouter.go("/email-verification");
      }
    });
  }
};
