// excercise 1 
//attemp de 'div' with id="container"
const container = document.querySelector('#container');

// create a new 'p' inside of 'container'
const paragraph = document.createElement('p');
// property of class="paragraph"
paragraph.classList.add('paragraph');
// CSS properties for 'p'
paragraph.style.cssText = 'color: red; font-size: 90px';
// text inside the 'p'
paragraph.textContent = "Hey, I'm red!";

const h3 = document.createElement('h3');
h3.classList.add('h3-properties');
h3.style.cssText = 'color: blue';
h3.textContent = "I’m a blue h3!";

const div = document.createElement('div');
div.classList.add('second-container');
div.style.cssText = 'background-color: pink; border: 1px solid #000';

const h1 = document.createElement('h1');
h1.textContent = "I’m a div";

const p = document.createElement('p');
p.textContent = "ME TOO!";

// append 'p' inside of "container"
container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(div);
// append 'h1' inside of 'div'
div.appendChild(h1); 
div.appendChild(p);
// end excercise 1  

// excercise 2 
const btn = document.querySelector('#btn');

let alertFunction = () => alert("YAY! YOU DID IT!");
// method 1
btn.addEventListener('click', alertFunction);
// method 2
btn.onclick = alertFunction;
// end excersice 2 

//  excercise 3
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one add a 'click' listener
  button.addEventListener('click', button = () =>{
     alert(button.id);
  });
});