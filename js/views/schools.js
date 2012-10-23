define( function(require){
  var template = require('text!templates/schools.html');
  var SchoolView = require("views/school");

  SchoolsView = Backbone.View.extend({
    initialize: function(){
      _.bindAll(this, 'render');
      this.collection.on("reset", this.render);
      this.template = _.template(template);
    },
    render: function(){
      this.$el.html(this.template());
      var self = this;
      var schools = this.collection;
      schools.each(function(school){
        self.$el.append((new SchoolView({model: school, collection: schools})).render().el);
      });
      return this;
    }
  });
  return SchoolsView;
});
