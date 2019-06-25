var h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
    alert("h1 was clicked");
});
h1.addEventListener("click",function(){
    h1.style.background = "orange";
});

var ul = document.querySelector("ul");
ul.addEventListener("click", function(){
    console.log("ul was clicked");
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click",function(){
        this.style.color = "pink";
    });
}