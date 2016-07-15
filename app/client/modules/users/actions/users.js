export default {


  login({Meteor, LocalState, FlowRouter}, email, password) {

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Email & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        console.log(err);
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      FlowRouter.go('/dashboard/inOutBoard');
    });

  }
  ,
  recover_password({Meteor, LocalState}, email) {
    Accounts.forgotPassword({email: email}, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        notify.show("Email sent. Please check your mail account.", 'success');
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

      } else {
        
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
