# state-object

## Installation

### Browserify

    $ npm install state-object

## API

#### `so.get()`

Returns the current state of `so`.

#### `so.set(newState)`

Sets state of `so` to `newState`.

#### `so.guardedTimeout(fn, timeout)`

Schedule `fn` to be called after `timeout` milliseconds, if and only if `so.set()` has not been called in the intervening period.

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.