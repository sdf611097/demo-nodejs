'use strict';

function add(arg1, arg2){
    return arg1 + arg2;   
}

var del;

del = function(arg1, arg2){
    return arg1 - arg2;
}

var multiply = (arg1, arg2) => arg1 * arg2 ;

var divide = (arg1, arg2) => {
    return arg1 / arg2;
}

module.exports = {
    add,
    del : del,
    mul : multiply,
    div : divide
}
