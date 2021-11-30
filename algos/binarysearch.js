// Write a function that, given a sorted array and a value, determines whether the value is found within the array through 
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or 
// less than a midway point, which is why the given array must be sorted. 
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array


// val = 9
// arr = [1,2,3,5,7,9,10 ,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!


function binarySearch(arr, val) {
    // your code here
}

console.log(binarySearch([1, 2], -2)) // -2
console.log(binarySearch([1, 2], 4)) // 4
console.log(binarySearch([1, 2], 1)) // 1
console.log(binarySearch([1,2,2], 2)) // 2
console.log(binarySearch([], 7)) // 7
console.log(binarySearch([1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2)) // 2
console.log(binarySearch([1, 1, 1, 1, 1], 1)) // 1
console.log(binarySearch([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 8)) // 8

// make sure to test all given scenarios!
// extra challenge: don't use built-in functions such as splice() or slice(), 
// with the exception of rounding functions (Math.floor(), Math.ceil())


//Jacob
function binarySearch(arr, val, left=0, right=arr.length) {
    if (arr.length==0) return -1
    if (arr[0] > val || arr[arr.length-1] < val){
        return -1
    }
    let midpoint = Math.floor((right+left)/2)
    if (arr[midpoint] < val){
        return binarySearch(arr, val, midpoint+1, right)
    }
    if (arr[midpoint] > val){
        return binarySearch(arr, val, left, midpoint-1)
    }
    if (arr[midpoint] == val){
        return midpoint
    }
}

//Wesley
let array = [1, 2];

function binarySearch(arr, value){
    let high = arr.length-1;
    let low = 0;

    while(low <= high){//while we still have a list
        let mid = Math.floor((high + low) / 2) 
        if(arr[mid] == value) { //if middle value == value we are looking for
            //return that value and we're done
            return mid;
        } else if (value > arr[mid]) { //ignore the left hand side
            low = mid + 1;
        } else{ //ignore right hand side
            high = mid - 1;
        }
    }
    //if value not found
    return -1
}

    console.log(binarySearch(array.sort(function(a,b){return a - b}), -2));

//Dunavan
const binarySearch = (arr, val, start = 0, stop=arr.length-1) => {
    if(arr.length === 0){
        return -1;
    }
    if(arr[start] > val || arr[stop] < val){
        return -1;
    }
    let midway = Math.floor((stop+start)/2);
    if(arr[midway] === val){
        return midway;
    }
    if(val > arr[midway]){
        start = midway+1;
    }
    else {
        stop = midway;
    }
    return binarySearch(arr,val, start, stop);
}