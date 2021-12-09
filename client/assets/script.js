0const app = require('./server/app'); 

const button1 = document.querySelector('List10Btn');
const button2 = document.querySelector('ListSingleBtn');


// event listener for button 1
button1.addEventListener('click', e => getSearch(e))
function getSearch(e){
  e.preventDefault()
  fetch('http://localhost:3000/search/all')
    .then(resp => resp.text)
    .then(text=>{document.getElementById('result').innerHTML= text})

};

// let form = document.querySelector('form')
//  form.addEventListener("click", e => getRandom(e))
//  function getRandom(e){
//     e.preventDefault()
//    fetch("http://localhost:3000/quoteRand")
//    .then(resp => resp.text())
//    .then(text => { document.getElementById("text").innerHTML=text
//      })
//  }
// event listener for button 2

button2.addEventListener('click', function()
{ 
  e.preventDefault()
  fetch('http://localhost:3000/search/single')
    .then(resp => resp.text)
    .then(document.getElementById('result').innerHTML="working")

}
); 



function getSearch(e) {  
  e.preventDefault()
  fetch('http://localhost:3000/search/all')
    .then(resp => resp.text)
    .then(document.getElementById('result').innerHTML = 'working')
};  
