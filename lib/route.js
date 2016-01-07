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
	layoutTemplate: 'layoutPages'
  });
  this.route('cart', {
    path: '/cart',
	layoutTemplate: 'layoutPages'
  });
  this.route('search', {
    path: '/search',
	layoutTemplate: 'layoutPages'
  });
  this.route('category', {
    path: '/category',
	layoutTemplate: 'layoutPages'
  });
  this.route('productpage', {
    path: '/productpage',
	layoutTemplate: 'layoutPages'
  });
});