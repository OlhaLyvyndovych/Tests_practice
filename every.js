'use strict'

let even = function(el) {
  return el % 2 === 0;
};

function every(arr, cond) {
  return arr.every(even);
}

module.exports = every;
