var h1 = document.querySelector("h1");

h1.style.color = "red";
h1.style.border = "5px solid pink";

var tag = document.querySelector("p");

// tag.classList.add("some-class");

// tag.classList.remove("another-class");

// tag.classList.toggle("another-class");

setInterval(function(){
    tag.classList.toggle("big");
}, 1000);

tag.textContent = "blah blah blah";

