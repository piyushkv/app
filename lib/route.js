Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('loginScreen', {
    path: '/'
  });
  this.route('register', {
    path: '/register',
	layoutTemplate: 'layoutInner'
  });
});