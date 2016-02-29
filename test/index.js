/**
 * Imports
 */

var splice = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(splice([1, 2, 3], 1, 1), [1, 3])
  t.deepEqual(splice([1, 2, 3], 1, 1, 5), [1, 5, 3])
  t.deepEqual(splice([1, 2, 3], 0, 1, 5), [5, 2, 3])
  t.deepEqual(splice([1, 2, 3], 2, 1, 5), [1, 2, 5])
  t.deepEqual(splice([1, 2, 3], 3, 1, 5), [1, 2, 3, 5])
  t.deepEqual(splice([1, 2, 3], -1, 1, 5), [1, 2, 5])

  t.end()
})
