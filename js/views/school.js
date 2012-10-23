define( function(require){
  var template = require('text!templates/school.html');

  SchoolView = Backbone.View.extend({
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template(template);
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return SchoolView;

});
