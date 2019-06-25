
var p = document.getElementsByTagName("p")[0];

var ul = document.querySelector("ul");

// p.textContent = "Corgi mixes are really really super adorable"; // this will replace everything inside the paragraph tag

// Inner HTML
// similar to textContent, except it returns a string
// of all the HTML contained in a given element

console.log(p.textContent);
console.log(p.innerHTML);

var ul = document.querySelector("ul");
console.log(ul.innerHTML);
//ul.innerHTML = "Plants are awesome!";   // we don't normally want to set the text

// one useful case is to change the tile
// notice the title doesn't have any html inside of it
document.querySelector("h1").textContent = "This is a new title";
// most people would use text content

console.log(document.body.innerHTML);
console.log(document.body.textContent);

//document.body.textContent = "<h1>GoodBye!</h1>";
document.body.innerHTML = "<h1>GoodBye!</h1>";