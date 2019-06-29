var scores = [90, 98, 89, 100, 100, 86, 94];

function average(scores) {
    var total = 0;
    scores.forEach(function(value){
        total += value;
   });
   console.log(Math.round(total / scores.length));
}

average(scores);