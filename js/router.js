define( function(require){
  
  var Schools = require("collections/schools"); 
  var SchoolsView = require("views/schools");

  var Router = Backbone.Router.extend({
    routes: {
              "": "start",
    },
    start: function(){
      var schools = new Schools;
      schools.fetch();
      var schoolsView = new SchoolsView({collection: schools});  
      $("#content").html(schoolsView.render().el);
    }
  })

  var initialize = function(){
    window.Router = new Router;
    window.Router.initialize();
    Backbone.history.start();
  }

  return {initialize: initialize};
});
