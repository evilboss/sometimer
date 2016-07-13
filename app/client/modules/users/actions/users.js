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
};
