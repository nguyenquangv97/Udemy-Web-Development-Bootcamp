function counter(){
    var count = 0;
    return function(){
        return ++count;
    }
}

var counter1 = counter();
counter1(); // 1
counter1(); // 2

var counter2 = counter();
counter2(); // 1
counter2(); // 2
counter1(); // 3 this is not affected by counter2!

count // ReferenceError: count is not defined - becuae it is private!
