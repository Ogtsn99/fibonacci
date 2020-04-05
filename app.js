'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if(memo.get(n) != undefined) return memo.get(n);
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  memo.set(n, fib(n - 1) + fib(n - 2));
  return fib(n - 1) + fib(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}