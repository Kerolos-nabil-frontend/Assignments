var quotes = [
   {
      quote:"Be yourself; everyone else is already taken",
      author:" - Oscar Wilde"
   } ,
   {
      quote:"You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening and live like it's heaven on earth",
      author:"- William W. Purkey "
   } ,
   {
      quote:"You only live once, but if you do it right, once is enough.",
      author:" - Mae West"
   } ,
   {
      quote:"To live is the rarest thing in the world. Most people exist, that is all.",
      author:"- Oscar Wilde"
   } ,
   {
      quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",
      author:" - Mark Twain"
   } ,
   {
      quote:"Life is what happens to us while we are making other plans.",
      author:" ― Allen Saunders"
   } ,
   {
      quote:"Everything you can imagine is real.",
      author:" ― Pablo Picasso"
   } ,
   {
      quote:"Don't think or judge, just listen.",
      author:"- Sarah Dessen"
   } ,
   {
      quote:"Sometimes the questions are complicated and the answers are simple.",
      author:"― Dr. Seuss"
   } ,
   {
      quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author:" ― Albert Einstein "

   } ,
  
]

var quoteElement=document.getElementById("Quotebox")
var authorElement=document.getElementById("Authorbox")

console.log()

function generateQuote(){
   var randomQuotes = Math.floor (Math.random()* quotes.length);
   
   quoteElement.innerHTML=quotes[randomQuotes].quote
   authorElement.innerHTML=quotes[randomQuotes].author


     }
     


