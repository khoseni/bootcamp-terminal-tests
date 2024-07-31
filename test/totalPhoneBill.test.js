import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('The totalPhoneBill Function', function () {

    it('totalPhoneBill for all calls and sms is R7.45', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('totalPhoneBill just one call and sms', function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('totalPhoneBill for sms', function () {
      assert.equal('R1.30', totalPhoneBill('sms, sms'));  
    });

});