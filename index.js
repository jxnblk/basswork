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
var reworkColor = require('rework-color-function');
var reworkPluginColors = require('rework-plugin-colors');
var namespace = require('rework-namespace');
var autoprefixer = require('autoprefixer');

module.exports = function(src, options, toStringOptions) {

  var options = options || {};
  var toStringOptions = toStringOptions || {};

  var css = rework(src, options)
    .use(reworkNPM())
    .use(reworkVars())
    .use(reworkMedia())
    .use(reworkCalc)
    .use(reworkColor)
    .use(reworkPluginColors()) // For legacy support
    .use(namespace(options.namespace, options.namespaceOptions))
    .toString(toStringOptions);

  // Process css as object
  if (toStringOptions.sourcemapAsObject) {
    css.code = autoprefixer().process(css.code).css;
  }
  // Process as string
  else {
    css = autoprefixer().process(css).css;
  }

  return css;

};

