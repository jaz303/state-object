# state-object

`state-object` creates objects that each encapsulate a single mutable state value. In addition to getter/setter methods, a `guardedTimeout` method is also provided, allowing future conditional execution of callbacks predicated on the state value.

## Installation

### Browserify

Install:

    $ npm install state-object

Require:

```javascript
var stateObject = require('state-object');
```

## API

#### `var so = stateObject(initialState)`

Create a new state object whose state is set to `initialState`.

#### `so.get()`

Returns the current state of `so`.

#### `so.set(newState)`

Sets state of `so` to `newState`.

#### `so.guardedTimeout(fn, timeout)`

Schedule `fn` to be called after `timeout` milliseconds, if and only if `so.set()` has not been called in the intervening period.

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.