var nums = [45,65,77,34];

function func(item){
    console.log(item);
}

function myForEach(arr, func){
    for(var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}



myForEach(nums, func);