const express = require('express');
const app = express(); //added semi colons
const cors = require('cors');
const port = 3000; // added port 

let quotes = [
  '"PERFECT IS THE ENEMY OF GOOD." –VOLTAIRE',
  '"I’M STILL LEARNING." –MICHELANGELO',
  '"LIFE IS A JOURNEY, NOT A DESTINATION." –RALPH WALDO EMERSON',
  '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." ―ABIGAIL ADAMS',
  '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." –RUMI',
  '"BE CURIOUS, NOT JUDGMENTAL." –WALT WHITMAN',
  '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." –ZIG ZIGLAR',
  '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." –UNKNOWN',
  '"NOTHING WILL WORK UNLESS YOU DO." –MAYA ANGELOU',
  '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." –EARL NIGHTINGALE',
  '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." —HENRY FORD',
  '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." –BENJAMIN FRANKLIN',
  '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." ―LEO BUSCAGLIA',
  '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." ―MAHATMA GANDHI',
  '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." –TAMMY BJELLAND'
];

function getRandomQuote () {
 let randomNum=Math.floor(Math.random()*quotes.length);
 quote=quotes[randomNum].tolowercase
  return quote
};

function getQuote (i) {
if ( i < quotes.length) {
   return quotes[i]}
else {
   return ("No more quotes")
 }
 };


app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// To do: Create a route for retrieving all quotes
app.get('/quotes/all',(req,res) => res.send(quotes));

// To do: Create a route for retrieving a random quote
app.get('/quotes/random', (req,res) => res.send(getRandomQuote));

// To do: Add handling for out-of-range index
app.get('/quotes/:index', (req, res) => res.send(getQuote([req.params.index]));

// To do: Get the server running
app.listen(port,() => console.log(`This is from http://localhost:${port}`))  //added
