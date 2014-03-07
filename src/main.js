'use strict';

require.config({
    paths: {
//        'jquery'    : '../bower_components/jquery/jquery',
//        'HTML'      : '../bower_components/HTML/HTML',
    }
});

var modules = ['aminoacid'];

require(modules, function () {
    var mods = {};
    // make each module accessible through global object for convenience
    for (var i = 0; i < modules.length; i++) {
        mods[modules[i]] = arguments[i];
    }
    window.BJS = mods;
});
