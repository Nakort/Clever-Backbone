define( function(require){

  var School = require("models/school");

  var Schools = Backbone.Collection.extend({
    model: School,
    url: "https://DEMO_KEY:@api.getclever.com/v1.1/schools"
  });

  return Schools;

});
