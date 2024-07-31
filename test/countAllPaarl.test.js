import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('The countAllPaarl Function', function () {

    it('countAllPaarl from pearl of any length correctly', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('Also this is countAllPaarl from pearl of any length correctly', function () {
         assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});