
var Bumpkit = require('bumpkit');
var geomicons = require('geomicons-open');

var bp = new Bumpkit();
console.log(bp);

var icons = document.querySelectorAll('.js-icon');
geomicons.inject(icons);


