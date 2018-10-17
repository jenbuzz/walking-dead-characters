'use strict';

const characters = require('./characters.json');

const getRandomNumber = max => {
    return Math.floor(Math.random() * (max + 1));
}

module.exports = () => {
    return characters[getRandomNumber(characters.length - 1)];
}
