function isEven1(num){
    // return true of even
    if(num % 2 === 0)
        return true; 
    else 
        return false;
}

function isEven2(num){
    return num % 2 === 0;
}

function factorial(num) {
    var result = 1;
    for(var i = num; i > 1; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(10)); 

function kebabToSnake(str){
    return str.replace(/-/g,"_");
}

var a = "Hello-there";
a = kebabToSnake(a);
console.log(a);