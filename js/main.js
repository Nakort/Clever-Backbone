require.config({
  paths: {
           underscore:                  'libs/underscore/underscore.min',
           backbone:                    'libs/backbone/backbone',
           jquery:                      'libs/jquery/jquery.min',
           templates:                   '../templates'
         },
  shim: {
          backbone:                     {
                                          deps: ['underscore', 'jquery'],
                                          exports: 'Backbone'
                                        },
          app: { deps: ['backbone'] }
        }
});

require([
  'app',
  'underscore',
], function(App){
  App.initialize();
});

