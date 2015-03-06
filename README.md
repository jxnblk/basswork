# Basswork

CSS preprocessor for [Basscss](http://basscss.com) built with Rework

## Rework Plugins Included:
- Rework NPM
- Rework Custom Media
- Rework Vars
- Rework Calc
- Rework Plugin Colors

## Install

```
npm install basswork
```

## Usage

### Node

Pass an unprocessed CSS string to Basswork, which will return the processed CSS.

```javascript
var basswork = require('basswork');
var fs = require('fs');

var src = fs.readFileSync('./src/base.css', 'utf8');
var css = basswork(src);
fs.writeFileSync('./css/base.css', css);
```

#### Options

Pass [Rework options](https://github.com/reworkcss/css#api) as the second argument, and [Rework stringify options](https://github.com/reworkcss/css#cssstringifyobject-options) as the third argument.
Basswork also includes a `namespace` option to prefix styles with a string followed by a hyphen.

```javascript
var css = basswork(src, { namespace: 'u' }, { compress: true });
```

### Command Line

```sh
$ basswork in.css out.css
```

```sh
$ basswork --sourcemap in.css out.css
```

MIT License

