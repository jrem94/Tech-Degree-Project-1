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
    year: "1967,"
},
{
    quote: "People are trapped in history and history is trapped in them.",
    source: "James Baldwin",
    citation: null,
    year: null
},
{
    quote: "Success consists of going from failure to failure without loss of enthusiasm.",
    source: "Winston Churchill",
    citation: null,
    year: "1950's"
},
{
    quote: "Don't waste your love on somebody, who doesn't value it.",
    source: "William Shakespeare",
    citation: "Romeo and Juliet",
    year: null
}
];

//created a function to collect a random object and it's properties in the function itself.

function getRandomQuote(quote, source, citation, year) {

    let i =  Math.floor(Math.random() * quotes.length );
    let getQuote = quotes[i];
    return getQuote;

}

/*created a function that stores getRandomQuote into a variable name randomQuote, then
used the variable to distribute properties using dot notation.*/

function printQuote() {

    let randomQuote = getRandomQuote();

    /*called elements by class name, and passed them respective object properties while also taking advantage
    of conditionals to adapt innerHTML so that webpage formatting is correct.*/

    if (randomQuote.citation == null || randomQuote.year == null){

        if(randomQuote.citation ==null && randomQuote.year == null){

            document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p>' +
            '<p class="source">' + randomQuote.source + '</p>';

        }else if(randomQuote.citation == null){

            document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p>' +
            '<p class="source">' + randomQuote.source +
            '<span class="year">' + randomQuote.year +'</span>\n</p>';

        } else {

            document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p>' +
            '<p class="source">' + randomQuote.source; +
            '<span class="citation">' + randomQuote.citation +'</span>\n</p>';

        }

    } else {

        document.getElementById('quote-box').innerHTML = '<p class="quote">' + randomQuote.quote + '</p>' +
        '<p class="source">' + randomQuote.source +
        '<span class="citation">' + randomQuote.citation +'</span>' +
        '<span class="year">' + randomQuote.year +'</span>\n</p>';

    };
}

//called the printQuote function.

printQuote()