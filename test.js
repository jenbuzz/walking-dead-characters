'use strict';

const walkingDeadCharacters = require('./index');

test('get character name', () => {
    expect(walkingDeadCharacters()).toBeTruthy();
});
