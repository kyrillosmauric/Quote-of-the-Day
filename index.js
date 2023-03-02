"use strict";
const arrayOfQuotes =[
    {quote:'Be yourself everyone else is already taken', author:'-- Oscar Wilde'},
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”    ",
    author:"― Marilyn Monroe "},
    {quote:"“So many books, so little time.” ",author:"― Frank Zappa"},
    {quote:"“You only live once, but if you do it right, once is enough.”",author:"― Mae West"},
    {quote:"“Be the change that you wish to see in the world.” ",author:"― Mahatma Gandhi"},
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",author:"― Dr. Seuss"},

    
]





function randomQuotes() {
  const random =  Math.floor(Math.random()*arrayOfQuotes.length)
  document.getElementById("quoteOutput").innerHTML= arrayOfQuotes[random].quote;
  document.getElementById("authorOutput").innerHTML= arrayOfQuotes[random].author;

 }

