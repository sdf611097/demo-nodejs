'use strict';
const expect = require('chai').expect;
const func = require('../function.js');

describe('Test functions', function(){
    it('add', function(){
        let a =3, b=5;
        expect(func.add(a,b)).to.equal(a+b);
    });
    it('del', function(){
        let a =3, b=5;
        expect(func.del(a,b)).to.equal(a-b);
    });

    it('mul', function(){
        let a =3, b=5;
        expect(func.mul(a,b)).to.equal(a*b);
    });
    it('div', function(){
        let a =3, b=5;
        expect(func.div(a,b)).to.equal(a/b);
    });

});



