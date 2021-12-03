'use strict';

let value = 3;

document.querySelector('.increase').addEventListener('click', function () {
  value = value + 1;
  document.querySelector('.value').textContent = value;
});

document.querySelector('.decrease').addEventListener('click', function () {
  value = value - 1;
  document.querySelector('.value').textContent = value;
  console.log(value);
});

document.querySelector('.reset').addEventListener('click', function () {
  value = 3;
  document.querySelector('.value').textContent = value;
  console.log(value);
});
document.querySelector('.pass').addEventListener('click', function () {
  value += 2;
  document.querySelector('.value').textContent = value;
  console.log(value);
});
