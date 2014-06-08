module.exports = stateObject;

function stateObject(initialState) {

    var state   = initialState;
    var gen     = 1;

    function get() {
        return state;
    }

    function set(newState) {
        gen++;
        state = newState;
    }

    function timeout(fn, delay) {
        var initialGen = gen;
        return setTimeout(function() {
            if (gen === initialGen) {
                fn();
            }
        }, delay);
    }

    return {
        get             : get,
        set             : set,
        guardedTimeout  : timeout
    };

}