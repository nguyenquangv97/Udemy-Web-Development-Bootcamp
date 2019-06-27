console.log($('h1').text());
console.log($('ul').text());
console.log($('li').text());
$('li').text("new li texts");

$('ul').html("<li>I Hacked your UL</li><li>new li</li>");
$('li').html("<a href='https://www.google.com'>CLICK ME TO GO TO GOOGLE</a>")


$('img').css("width", "200px");

$('img').attr("src", "https://images.unsplash.com/photo-1491921125492-f0b9c835b699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");

console.log($('input').val("Quang Nguyen Test"));

$('h1').addClass("correct");
$('li:last-of-type').addClass("wrong");
$('li:first-of-type').toggleClass("done")
