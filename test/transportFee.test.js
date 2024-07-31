import assert from "assert";
import transportFee from "../transportFee.js";


describe('The transportFee Function', function () {

    it('If transportFee for the morning pay R20', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('If transportFee for the afternoon pay R10', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('If transportFee for the nightshift pay nothing', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });


});