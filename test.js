'use strict';

const walking_dead_character = require('./index');

test('get rainbow emoji using exact match', () => {
    expect(walking_dead_character()).toBeTruthy();
});
