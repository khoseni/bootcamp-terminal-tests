import assert from "assert";
import isWeekday from "../isWeekday.js";
//import { it } from "node:test";

describe('The isWeekday Function', function () {

    it('Today we are checking isWeekDay', function () {
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

    it('Today we are chekcing if isWeekden', function () {
          assert.equal(isWeekday('Sunday'), false);  
          assert.equal(isWeekday('Saturday'), false);
     });



});



