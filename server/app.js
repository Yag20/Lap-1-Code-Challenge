const express = require('express');
const app = express(); 
const cors = require('cors');
const port = 3000; 


// const searchList = [
//   { id: 1, name: 'list item 1' },
//   { id: 2, name: 'list item 2' },
//   { id: 3, name: 'list item 3'},
//   { id: 4, name: 'list item 4' },
//   { id: 5, name: 'list item 5' },
//   { id: 6, name: 'list item 6'},
//   { id: 7, name: 'list item 7' },
//   { id: 8, name: 'list item 8' },
//   { id: 9, name: 'list item 9'},
//   { id: 10, name: 'list item 10'},
// ];

const searchList = [
  'item1',
 'item2', 
 'item3',
 'item4',
  'item5', 
  'item6',
  'item7',
  'item8',
  'item9',
  'item 10'];

let singleItem="";

function getSingleSearch (i) {
if ( i < searchList.length) {
   singleItem = searchList[i];
   return singleItem;}
else {
   return ("No more quotes");
 }
 };

 




app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// To do: Create a route for retrieving all search items 
app.get('/search/all',(req,res) => res.send(searchList));

// To do: Create a route for retrieving a single list item 
app.get('/search/single', (req,res) => res.send(getSingleSearch(2)));

// To do: Add handling for out-of-range index
// app.get('/quotes/:index', (req, res) => res.send(getQuote([req.params.index]));

// To do: Get the server running
app.listen(port,() => console.log(`This is from http://localhost:${port}`))  //added
