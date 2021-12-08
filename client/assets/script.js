const form = document.querySelector('form');
const app = require('./server/app'); //added

form.addEventListener('submit', getRandomQuote); // remove brackets on func getRandomQuote

function getRandomQuote(e) {  
  e.preventDefault()
  fetch('http://localhost:3000/quotes')
    .then(resp => resp.text)
    .then(document.getElementById('text').innerHTML = quote)
};  
