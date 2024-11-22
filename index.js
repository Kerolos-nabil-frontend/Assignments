var quotes = [
   "Be yourself; everyone else is already taken - Oscar Wilde"  ,
   "You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening and live like it's heaven on earth - William W. Purkey ",
    "You only live once, but if you do it right, once is enough. - Mae West ",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
    "“Life is what happens to us while we are making other plans. ― Allen Saunders",
    "Everything you can imagine is real. ― Pablo Picasso ",
    "Don't think or judge, just listen. - Sarah Dessen",
    "Sometimes the questions are complicated and the answers are simple. ― Dr. Seuss",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. ― Albert Einstein "
]



function generateQuote(){
   var randomQuotes = Math.floor (Math.random()* quotes.length);
        document.getElementById('Quote').innerHTML = quotes[randomQuotes];
     }
     


