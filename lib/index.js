/**
 * Modules
 */

/**
 * Expose splice
 */

module.exports = splice

/**
 * splice
 */

function splice (arr, idx, n /*, items */) {
  var result = []
  var nItems = arguments.length - 3

  if (idx < 0) idx = arr.length + idx
  if (idx > arr.length) idx = arr.length

  for (var i = 0; i < idx; ++i) {
    result.push(arr[i])
  }

  for (var j = 0; j < nItems; j++) {
    result.push(arguments[j + 3])
  }

  for (var k = idx + n; k < arr.length; ++k) {
    result.push(arr[k])
  }

  return result
}
