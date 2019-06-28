// jQuery Events: Click

// $('h1').click(function(){
//     alert("h1 clicked!");
// });

$('button').click(function(){
    $(this).toggleClass("pink");
});

$('button').click(function(){
    var text = $(this).text();
    console.log("You clicked " + text);
})

// jQuery Events: Keypress
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        alert("you hit enter");    
    }
});

// jQuery Events: on

$('h1').on("click", function(){
    $(this).css("color", "purple");
});

$('input').on("keypress", function(){
    console.log("keypressed!");
});

$('button').on("mouseenter",function(){
    $(this).css("font-weight", "bold");
});
$('button').on("mouseleave",function(){
    $(this).css("font-weight", "normal");
})