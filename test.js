'use strict'

var test = require('tape')
var Split = require('./')

test(function (t) {
  var split = Split(0.5)
  t.ok(split(0))
  t.ok(split(2))
  t.notOk(split(1))
  t.notOk(split(3))
  t.end()
})

test(function (t) {
  var split = Split(0.1)
  t.ok(split(0))
  t.notOk(split(1))
  t.notOk(split(9))
  t.ok(split(10))
  t.end()
})

test(function (t) {
  var split = Split(0.2)
  t.ok(split(0))
  t.notOk(split(1))
  t.ok(split(5))
  t.notOk(split(9))
  t.ok(split(10))
  t.end()
})

test(function (t) {
  var split = Split(1)
  t.ok(split(0))
  t.ok(split(1))
  t.ok(split(2))
  t.ok(split(3))
  t.end()
})

test(function (t) {
  var split = Split(0)
  t.notOk(split(0))
  t.notOk(split(1))
  t.notOk(split(2))
  t.end()
})

test('1/n required', function (t) {
  t.throws(function () {
    Split(0.33, 10)()
  }, /expressable as 1\/n/)
  t.end()
})
