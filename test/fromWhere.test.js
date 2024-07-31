import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('The fromWhere Function', function () {

    it('Are you coming from Bellville?', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });

    it('Are you coming from Paarl?', function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it('Are you coming from Mother land?', function () {
       assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it('Are you coming from Somewhere else?', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });






});