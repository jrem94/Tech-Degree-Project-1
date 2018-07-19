// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);

//created an array of five objects with varying null properties to showcase formatting.

const quotes = [
{
    quote: "The only thing we have to fear is...fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "FDR's First Inaugural Address",
    year: "1933"
},
{
    quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    source: "Martin Luther King Jr.",
    citation: "Cleveland Speech",
    year: "1967"
},
{
    quote: "People are trapped in history and history is trapped in them.",
    source: "James Baldwin"
},
{
    quote: "Success consists of going from failure to failure without loss of enthusiasm.",
    source: "Winston Churchill",
    year: "1950's"
},
{
    quote: "Don't waste your love on somebody, who doesn't value it.",
    source: "William Shakespeare",
    citation: "Romeo and Juliet"
}
];

//created a function to collect a random object and it's properties in the function itself.

function getRandomQuote() {

    return quotes[Math.floor(Math.random() * quotes.length )];  
}

/*created a function that stores getRandomQuote into a variable name randomQuote, then
used the variable to distribute properties using dot notation.*/

function printQuote() {

    let randomQuote = getRandomQuote();

    //constructed innerHTML, and passed stored properties to appropriate elements.

    document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source +
    '<span class="citation">' + randomQuote.citation +'</span>' + '<span class="year">' + randomQuote.year +'</span>\n</p>';

    //Stored elements in two new variabels, then created a conditional to remove html with empty (false) properties.

    let removeCit = document.querySelectorAll('.citation')[0];
    let removeYr = document.querySelectorAll('.year')[0];

    if(!randomQuote.citation && !randomQuote.year){

        removeCit.parentNode.removeChild(removeCit);
        removeYr.parentNode.removeChild(removeYr);
    }
    if(!randomQuote.citation){

        removeCit.parentNode.removeChild(removeCit);
    } else if (!randomQuote.year){

        removeYr.parentNode.removeChild(removeYr);
    } else {

    }
}

//called the printQuote function.

printQuote()