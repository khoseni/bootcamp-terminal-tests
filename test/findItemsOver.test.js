import assert from "assert";
import findItemsOver from "../findItemsOver.js";

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

describe('The findItemsOver Function', function () {

    it('In results 1, find items over 20', function () {
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

    it('In results 2, find items over 20', function () {
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it('In results 3, find items over 20', function () {
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });



   
    
});