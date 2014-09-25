// Basswork
// Rework wrapper for use with Basscss
// http://basscss.com
//
// Usage:
// var basswork = require('basswork');
// var fs = requie('fs');
//
// fs.readFileSync('./src/base.css', 'utf8');
// var css = basswork(src);
// fs.writeFileSync('./css/bass.css', css);


var rework = require('rework');
var reworkCalc = require('rework-calc');
var reworkMedia = require('rework-custom-media');
var reworkNPM = require('rework-npm');
var reworkVars = require('rework-vars');
var reworkColors = require('rework-plugin-colors');
var autoprefixer = require('autoprefixer');

module.exports = function(src, options) {

  var options = options || {};

  var css = rework(src, options)
    .use(reworkNPM())
    .use(reworkVars())
    .use(reworkMedia())
    .use(reworkCalc)
    .use(reworkColors())
    .toString();

  css = autoprefixer().process(css).css;

  return css;

};

