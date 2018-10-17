'use strict';

const walking_dead_character = require('./index');

test('get character name', () => {
    expect(walking_dead_character()).toBeTruthy();
});
