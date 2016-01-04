Router.configure({
  layoutTemplate: 'layoutInner'
});

Router.map(function() {
  this.route('loginScreen', {
    path: '/',
	layoutTemplate: 'layout'
  });
  this.route('register', {
    path: '/register'
  });
  this.route('forgot', {
    path: '/forgot'
  });
  this.route('dashboard', {
    path: '/dashboard',
	layoutTemplate: 'layout-pages'
  });
  this.route('cart', {
    path: '/cart',
	layoutTemplate: 'layout-pages'
  });
  this.route('search', {
    path: '/search',
	layoutTemplate: 'layout-pages'
  });
});