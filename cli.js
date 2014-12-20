#!/usr/bin/env node
var minimist = require('minimist');
var fs = require('fs');
var basswork = require('./');

var usage = [
  "usage: basswork [--sourcemap] <filename>",
  "e.g.:  basswork --sourcemap styles.css",
]

function docExit(lines, status) {
  lines.forEach(function(line) { console.log(line) });
  process.exit(status);
}

// parse commandline args
var args = minimist(process.argv.slice(2), { boolean: 'sourcemap' });

// show usage if --help is an arg
if (args.help) docExit(usage);

// exit with error if no input filename given
var filename = args._[0];
if (!filename) docExit([
  "error: no input file provided"
].concat(usage), 1);

// get full path to input css file
var path = process.cwd() + '/' + filename;

// exit with error if input file doesn't exist
if (!fs.existsSync(path)) docExit([
  "error: "+path+" doesn't exist"
].concat(usage), 1);

var sourceCSS = fs.readFileSync(path, 'utf8');

// render css
var css = basswork(
  sourceCSS,
  { source: path },
  { sourcemap: args.sourcemap }
);

// write out css
console.log(css);
