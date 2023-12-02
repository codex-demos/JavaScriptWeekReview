'use strict';
const message = document.querySelector('#message');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const color = ['red', 'blue', 'green', 'yellow', 'purple'];
const nums = [1, 2, 3, 4, 5];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  const name = e.target.name.value;
  const age = e.target.age.value;
  li.innerText = `
   Name: ${name}
   Age: ${age}`;
  ul.appendChild(li);
});

for (let i = 0; i < color.length; i++) {
  const p = document.createElement('p');
  p.innerText = color[i];
  message.appendChild(p);
}

let counter = 0;
while (counter < 5) {
  const p = document.createElement('p');
  p.innerText = `Count: ${counter + 1}`;
  message.appendChild(p);
  counter++;
}
const newNums = nums.map((number) => number * 2);
console.log(newNums);

const odds = nums.filter((number) => number % 2 !== 0);
console.log('odds:', odds);

function forEachMethod() {
  odds.forEach((number) => {
    const li = document.createElement('li');
    li.innerText = number;
    ul.appendChild(li);
  });
}

forEachMethod();

const myArray1 = [1, 2, 3];
const myArray2 = myArray1;
myArray1.push('New value');
console.log(myArray2);

let myNum1 = 5;
let myNum2 = myNum1;
myNum1 = 10;

console.log(myNum2);
