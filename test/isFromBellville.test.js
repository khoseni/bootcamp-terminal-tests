import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBelliville Function', function(){

    it('It should return true if isFromBellville',function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('It should return false if isFromBellville',function(){
       assert.equal(isFromBellville('CJ 123'), false);
    });    
});