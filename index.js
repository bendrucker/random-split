'use strict'

var curry = require('ap').curry
var assertEqual = require('assert-equal')
var assert = require('assert-ok')
var isInteger = require('number-is-integer')

module.exports = curry(split)

function split (proportion, number) {
  assertEqual(typeof proportion, 'number')
  assert(proportion >= 0 && proportion <= 1, 'proportion must be >= 0 and <= 1')
  assertEqual(typeof number, 'number')

  if (!proportion) return false

  var divisor = (1 / proportion)
  assert(isInteger(divisor), 'proportion must be expressable as 1/n')

  return !(number % divisor)
}
