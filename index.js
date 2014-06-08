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

    function noChangeTimeout(fn, delay) {
        var initialGen = gen;
        return setTimeout(function() {
            if (gen === initialGen) {
                fn();
            }
        }, delay);
    }

    function stateDependentTimeout(onlyInState, fn, delay) {
        return setTimeout(function() {
            if (state === onlyInState) {
                fn();
            }
        }, delay);
    }

    function timeout(onlyInState, fn, delay) {
        if (typeof onlyInState === 'function') {
            return noChangeTimeout(onlyInState, fn);
        } else {
            return stateDependentTimeout(onlyInState, fn, delay);
        }
    }

    return {
        get             : get,
        set             : set,
        guardedTimeout  : timeout
    };

}