
# splice

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Immutable splice.

## Installation

    $ npm install @f/splice

## Usage

```js
var splice = require('@f/splice')

splice([1, 2, 3], 1, 1)      // -> [1, 3]
splice([1, 2, 3], 1, 1, 5),  // -> [1, 5, 3]
splice([1, 2, 3], 0, 1, 5),  // -> [5, 2, 3]
```

## API

### splice(arr, idx, deleteCount, ...items)

- `arr` - The array you want to splice
- `idx` - The position in the array to begin removing/inserting items
- `deleteCount` - The number of items to remove at position `idx`
- `...items` - Optional list of items to insert at position `idx`

**Returns:** A new array with the desired changes.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/splice.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/splice
[git-image]: https://img.shields.io/github/tag/micro-js/splice.svg?style=flat-square
[git-url]: https://github.com/micro-js/splice
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/splice.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/splice
