'use strict';


var critical = require('critical');



critical.generate({
    base: '_site/',
    src: 'index.html',
    target: '../assets/css/min/index.min.css',
    width: 1300,
    height: 900,
});
