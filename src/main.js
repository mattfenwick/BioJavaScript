'use strict';

require.config({
    paths: {
//        'jquery'    : '../bower_components/jquery/jquery',
//        'HTML'      : '../bower_components/HTML/HTML',
//        'unparse-js': '../bower_components/unparse-js/'
    }
});

var modules = ['aminoacid'];

require(modules, function () {
    for (var i = 0; i < modules.length; i++) {
        window[modules[i]] = arguments[i]; // add each module to global object for convenience
    }
});
