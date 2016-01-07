if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  
  Template.loginScreen.events({
    'click button': function(){
        Router.go('/dashboard');
    }
  });
  Template.cart.events({
    'click .delcart': function(e){
        $(e.currentTarget).parent(".item").fadeOut();
    }
  });
  
  Template.layoutPages.events({
    'click .search': function(){
		$(".searchbox").fadeIn();
    },
    'click .close-search': function(){
		$(".searchbox").fadeOut();
    },
    'change #searchInput': function(){
        console.log("You clicked something");
		$(".searchbox").fadeOut();
        Router.go('/search');
    },
    'click .view-detail': function(){
        Router.go('/productpage');
    }
});
  Template.search.events({
    'click .deleteTag': function(e){
        $(e.currentTarget).parent("a").fadeOut();
    }
  });


  
  Template.search.onRendered(function() {
	  $(".pages.overflow-scroll").addClass("noscroll");
	  var scrollHeight = $(".overflow-scroll").innerHeight() - $(".searchkeywords").innerHeight();
	  $(".searchitems").height(scrollHeight);
	});
	
	Template.productpage.onRendered(function() {
	  $(".pages.overflow-scroll").addClass("noscroll");
	  var scrollHeight = $(".overflow-scroll").innerHeight() - $(".searchkeywords").innerHeight();
	  $(".searchitems").height(scrollHeight);
	});
  
  Template.dashboard.onRendered(function() {
	  IonSideMenu.snapper.disable();
	});
	
	Template.dashboard.onDestroyed(function() {
	  IonSideMenu.snapper.enable();
	});
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
