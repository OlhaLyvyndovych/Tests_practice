'use strict'

let even = function(el) {
  return el % 2 === 0;
};

function some(arr, cond) {
  return arr.some(even);
}
