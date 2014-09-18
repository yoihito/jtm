(function( window, $ ) {

    var app = window.app;

    app.utils.redirect = function( route, route_obj ) {
        window.location.href = app.utils.route_parse( route, route_obj )[ 0 ];
    };

})( window, jQuery );
