var test = require('tape');
var stateObject = require('..');

test('get state', function(assert) {

    var so = stateObject('foo');
    assert.ok(so.get() === 'foo');
    assert.end();

});

test('set state', function(assert) {

    var so = stateObject('bar');
    so.set('bleem');
    assert.ok(so.get() === 'bleem');
    assert.end();

});

test('guardedTimeout calls callback when state is unchanged', function(assert) {

    assert.plan(1);

    var so = stateObject('baz');

    var x = 0;

    so.guardedTimeout(function() {
        x = 1;
    }, 100);

    setTimeout(function() {
        assert.equal(x, 1);
    }, 200);

});

test('guardedTimeout does not cal callback is state is changed', function(assert) {

    assert.plan(1);

    var so = stateObject('baz');

    var x = 0;

    so.guardedTimeout(function() {
        x = 1;
    }, 100);

    setTimeout(function() {
        assert.equal(x, 0);
    }, 200);

    so.set('raaaa');

});