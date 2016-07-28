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

console.log('add', 1, 2,'=',  add(1,2));
console.log('del', 1, 2,'=',  del(1,2));
console.log('mul', 1, 2,'=',  multiply(1,2));
console.log('div', 1, 2,'=',  divide(1,2));


module.exports = {
    add,
    del : del,
    mul : multiply,
    div : divide
}
