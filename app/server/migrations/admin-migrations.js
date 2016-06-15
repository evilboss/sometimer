/**
 * Created by jr on 5/16/16.
 */
export function loadUsers() {
  console.log('Loading users');
  if (Meteor.users.find({}).count() === 0) {
    console.log('migrating user admins');
    Accounts.createUser({
      email: "admin@admin.com",
      password: "password",
    });
  }
}
export function removeAllUsers() {
  console.log('Removing Users');
  return Meteor.users.remove({});
}