// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [2,1,2,1,3,4,4,5] ==> [2,1,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!


function removeDuplicates(arr) {
    // your code here
}

console.log(removeDuplicates([1,2,1,3,4,4,5])); // [1,2,3,4,5]
onsole.log(removeDuplicates([1,2,1,3,4,4,5,4,4,4,4,6,6,6,6,78,7])) // [1, 2, 3, 4, 6, 7, 8, 5, 53]

//===========================================
// Kadane's Algo
//===========================================

// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a subarray. Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

function maxOfSubarray(arr) {
    // your code here
}

console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]

//Jacob
function removeDuplicates(arr) {
    let newArr = []
    let dict = {}
    for (var i = 0; i < arr.length; i++){
        if (!dict[arr[i]]){ //If the number isn't in the dictionary already
            dict[arr[i]] = 1
            newArr.push(arr[i])
        }
    }
    return newArr
}

function maxOfSubarray(arr) {
    let sum = 0 //Keeps track of highest sum
    let tempSum = 0
    let bounds = [0, arr.length] //Keeps track of subarray
    for (var i=0; i<arr.length; i++){
        tempSum = 0
        for (var j = i; j < arr.length; j++){
            tempSum += arr[j]
            if (tempSum > sum){
                bounds[0] = i
                bounds[1] = j
                sum = tempSum
            }
        }
    }
    console.log(arr.slice(bounds[0], bounds[1]+1))
    return sum
}

//Benjamin
function removeDuplicates(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (!newArray.includes (arr[i])) {
        newArray.push (arr[i])
        }
    }
    return (newArray);
    }
    
    console.log(removeDuplicates([1,2,1,3,4,4,5])); // [1,2,3,4,5]
    console.log(removeDuplicates([1,2,1,3,4,4,5,4,4,4,4,6,6,6,6,7,8,7,53])) // [1, 2, 3, 4, 6, 7, 8, 5, 53]


    function maxOfSubarray(arr) {
        var newArray = [];
        var substring = null;
        for (var i = 0; i < arr.length; i++) {
            for (var j = i+1; j < arr.length; j++) {
            var newSubstring = arr.slice(i, j);
            var sum = newSubstring.reduce((p, c) => p + c)
                if (sum > substring) {
                substring = sum;
                newArray = newSubstring;
            }
            }
        }
        console.log (substring)
        return newArray;
    }
      
      console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]



//Dunavan
function maxOfSubarray(arr) {
    let maxSum = arr[0];
    let tempSum = 0;
    let laggingSum = arr[0];
    let leftBound = 0;
    let rightBound = 0;
    for(let i = 1; i < arr.length; i++){
        maxSum+= arr[i];
        tempSum+=arr[i];
        if(maxSum >= tempSum && arr[i] > 0){
            console.log("in first if. max sum is",maxSum,"tempsum is",tempSum)
            tempSum=0;
            rightBound=i;
            laggingSum=maxSum;
        }
        else if(arr[i] <= 0){
            tempSum=0;
            console.log("in else if. max sum is",maxSum,"tempsum is",tempSum,"laggingSum is",laggingSum)
        }
        else{
            maxSum=tempSum;
            laggingSum=maxSum;
            leftBound=i;
            rightBound=i;
            console.log("in else")
        }
    }
    console.log(arr.slice(leftBound,rightBound+1));
    return laggingSum;
}

console.log(maxOfSubarray([1,2,-4,3,-2,3,-1]))

function maxOfSubarray(arr) {
    let maxSum = arr[0];
    let tempSum = 0;
    let laggingSum = arr[0];
    let leftBound = 0;
    let rightBound = 0;
    for(let i = 1; i < arr.length; i++){
        maxSum+= arr[i];
        tempSum+=arr[i];
        if(maxSum >= tempSum && arr[i] > 0){
            tempSum=0;
            rightBound=i;
            laggingSum=maxSum;
        }
        else if(laggingSum < tempSum && arr[i] <= 0){
            maxSum=tempSum;
            laggingSum=maxSum;
            leftBound=i;
            rightBound=i;
        }
        else if(arr[i] <= 0){
            tempSum=0;
        }
        else{
            maxSum=tempSum;
            laggingSum=maxSum;
            leftBound=i;
            rightBound=i;
        }
    }
    console.log(arr.slice(leftBound,rightBound+1));
    return laggingSum;
}

//Matthew
function maxOfSubarray(arr) {
    let maxSum = 0;
    let maxStop = 0;
    let maxStart = 0
    let currentSum = 0;
    let currentStart = 0;
    let currentStop = 0;

    for (let index = 0; index < arr.length; index++) {
        let testSum = currentSum + arr[index];
        if (testSum > maxSum) {
            maxSum = testSum;
            maxStop = index;
            maxStart = currentStart;
        }
        if (testSum < 0) {
            currentStart = index+1;
            currentStop = index+1;
            currentSum = 0;
            continue;
        }
        currentSum = testSum;
        currentStop = index;
    }
    console.log(arr.slice(maxStart, maxStop + 1));
    return maxSum;
}

console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]

//Wesley
let noDuplicates = (arr) => {
    let uniqueCharacters = new Set(arr);
    let backToArray = Array.from(uniqueCharacters);
    console.log(backToArray);