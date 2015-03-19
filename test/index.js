
var fs = require('fs');
var path = require('path');
var basswork = require('..');


var src = fs.readFileSync('./test/example.css', 'utf8');
var css = basswork(src);

console.log(css);

var css = basswork(src, { namespace: 'bass' });
console.log('namespaced', css);

var compressed = basswork(src, { namespace: 'u' }, { compress: true });
console.log('compressed', compressed);

