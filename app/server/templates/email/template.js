/**
 * Created by jr on 9/21/16.
 */
Templates = {};
Templates.sample = {
  path: 'sample-email/template.html',    // Relative to the 'private' dir.
  scss: 'sample-email/style.scss',       // Mail specific SCSS.
  helpers: {
    capitalizedName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
  },
  route: {
    path: '/sample/:name',
    data: function (params) {
      return {
        name: params.name,
        names: ['Johan', 'John', 'Paul', 'Ringo']
      };
    }
  }
};
Templates.invitation = {
  path: 'invitation/template.html',    // Relative to the 'private' dir.
  scss: 'invitation/style.scss',       // Mail specific SCSS.
  helpers: {
    capitalizedName() {
      return this.token.charAt(0).toUpperCase() + this.token.slice(1);
    }
  },
  route: {
    path: '/invitation/:token',
    data: function (params) {
      return {
        token: params.token,
        names: ['Johan', 'John', 'Paul', 'Ringo'],
        name: 'Aaron'
      };
    }
  }
}