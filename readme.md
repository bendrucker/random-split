# random-split [![Build Status](https://travis-ci.org/bendrucker/random-split.svg?branch=master)](https://travis-ci.org/bendrucker/random-split) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/random-split.svg)](https://greenkeeper.io/)

> Generate a random boolean split using a number input


## Install

```
$ npm install --save random-split
```


## Usage

```js
var Split = require('random-split')

var split = Split(0.1)
//=> Generate a split where true is returned with p=0.1

split(0)
//=> true

split(1)
//=> false

split(10)
//=> true
```

`Split` is a curried function. You'll probably want to pass the proportion initially and reuse the returned function for multiple number inputs.

## API

#### `Split(proportion, number)` -> `function`

##### proportion

*Required*  
Type: `number`

The proportion of numbers where the split will return `true`.

##### number

*Required*  
Type: `number`

The number to split using the proportion.


## License

MIT © [Ben Drucker](http://bendrucker.me)
