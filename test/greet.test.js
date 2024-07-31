import assert from "assert";
import greet from "../greet.js";

describe('The Greet Function', function () {

    it('Greet bob', function () {
        assert.equal(greet('Bob'), 'Hello, Bob');
    });

    it('Greet Sam', function () {
       assert.equal(greet('Sam'), 'Hello, Sam');
    });


});