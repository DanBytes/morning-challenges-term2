/*
Open Door
Return true if name is Simon and hasCoffee is true.
Otherwise return false.
Test your solution:
mocha 03_open_door.js
*/

function openDoor(input) {
    // Your code here
    for (item of input) {
        console.log(input);
        if (item.name === "Simon" && item.hasCoffee === true) {
            return true;
        }
    }
    return false;
}

function makeItem(name, hasCoffee) {
    item = new Object()
    item.name = name
    item.hasCoffee = hasCoffee
    return item
}

var assert = require('assert');

describe('openDoor', function () {
    let hash = [];
    it('should return true if "Simon" and hasCoffee with single object', function () {
        hash.push(makeItem('Simon', true))
        assert.equal(true, openDoor(hash))
    })
    it('should return true if "Simon" and hasCoffee with multiple objects', function () {
        let hash = [];
        hash.push(makeItem('Simon', true))
        hash.push(makeItem('Scott', true))
        assert.equal(true, openDoor(hash))
    })
    it('should return false if !"Simon" and hasCoffee', function () {
        let hash = [];
        hash.push(makeItem('Scott', true))
        assert.equal(false, openDoor(hash))
    })
    it('should return false if "Simon" and !hasCoffee', function () {
        let hash = [];
        hash.push(makeItem('Simon', false))
        assert.equal(false, openDoor(hash))
    })
    it('should return false if empty array passed', function () {
        let hash = [];
        assert.equal(false, openDoor(hash))
    })
})