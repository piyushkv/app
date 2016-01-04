if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  
  Template.loginScreen.events({
    'click button': function(){
        Router.go('/dashboard');
    }
  });
  
  
  Template.dashboard.rendered = function() {
	  IonSideMenu.snapper.disable();
	};
	
	Template.dashboard.destroyed = function() {
	  IonSideMenu.snapper.enable();
	};
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
