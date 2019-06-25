var a = document.querySelector("a");
// get
console.log(a.getAttribute("href"));
// set 
a.setAttribute("href", "https://www.youtube.com/");

console.log("after setting attribute: " + a.getAttribute("href"));