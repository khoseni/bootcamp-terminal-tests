import assert from "assert";
import yearsAgo from "../yearsAgo.js";
//import { it } from "node:test";

describe('The yearsAgo Function', function () {

    it('Getting a new dat for the year 1976', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('Getting a new date for the year 2000', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });


});