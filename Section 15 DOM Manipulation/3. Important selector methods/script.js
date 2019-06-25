var tag = document.getElementById("highlight");
console.dir(tag);

var tags = document.getElementsByClassName("bolded");



var tags = document.getElementsByTagName("li");
console.dir(tags);

var h1Tags = document.getElementsByTagName("h1");

console.dir(h1Tags);

// using querySelector 

// takes css style selector 

var tag = document.querySelector("#highlight");

// even though we have 2 .bolded class, it only selects the first one 
var tag2 = document.querySelector(".bolded");

console.dir(tag2);

var geth1 = document.querySelector("h1");

console.dir(geth1);

var allLis = document.querySelectorAll("li");

console.dir(allLis);