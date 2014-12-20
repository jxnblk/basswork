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

### Command Line

```sh
$ basswork in.css out.css
```

```sh
$ basswork --sourcemap in.css out.css
```

MIT License

