
import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('The countRegNumber Function', function(){

    it('countRegNumber is if is three or greater',function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('countRegNumber is if is less then three',function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });


});