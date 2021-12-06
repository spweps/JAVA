// Given an array comprised of integers, return it's mode value(aka. the most common value in that dataset).

function mode(arr) {
    // your code here
}

console.log(mode([1,2,3,1,1,2,2,5,6])); //return 1

// ==========================================

// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 

// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// Slightly harder: Work in-place in the given array (do not create a new array). Alter the order if needed! 
// Example #2) [1, [2,3], 4, []] ==> return same array but adjusted [1,2,3,4]

// **Assume that all elements are either numbers or arrays

function flatten(arr) {
    // your code here
}

console.log(flatten([1, [2,3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2,3], 4, [[[5]]]])); // [1,2,3,4,5]

//Jacob
function mode(arr) {
    let dict = {}
    let max = 0
    let mode = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (dict[arr[i]]){
            dict[arr[i]] += 1
            if (dict[arr[i]] > max){
                max = dict[arr[i]]
                mode = arr[i]
            }
        }
        else dict[arr[i]] = 1
    }
    return mode
}

function flatten(arr, newArr=[]) { //[1, [2,3], 4, *[]]
    for (var i = 0; i < arr.length; i++){ //newArr = []
        if (typeof arr[i] == "object"){ //if it's an array
            flatten(arr[i], newArr) //newArr = [1, 2, 3]
        }
        else newArr.push(arr[i]) //newArr = [1, 2, 3, 4]
    }
    return newArr
}

//Heather
function mode(arr) {
    // your code here
    let arrayDict = {[arr[0]] : 1};
    let currentMaxCount = 1;
    let currentMode = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (!arrayDict[arr[i]]) {
            arrayDict[arr[i]] = 1;
            
        } else {
            arrayDict[arr[i]]++;
        }
        if (arrayDict[arr[i]] > currentMaxCount) {
            currentMaxCount = arrayDict[arr[i]];
            currentMode = arr[i]
        }
    }
    return currentMode;
}

function flatten(arr, newArray=[]) {
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            newArray.push(arr[i])
        } else {
            newArray = flatten(arr[i], newArray);
        }
    }
    return newArray;
}

//Doug
jsfunction flatten(arr) {
    // your code here
    const flat = [];
    const handleFlat=(arr)=>{
        let counter = 0;
        while(counter<arr.length){
            const val = arr[counter];
            if(Array.isArray(val)){
                handleFlat(val);
            }else{
                flat.push(val);
            }
            counter++;
        }
    }
    handleFlat(arr);
    return flat;
}

console.log(flatten([1, [2, 3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2, 3], 4, [[[5]]]])); // [1,2,3,4,5]

function flatten(arr) {
    // your code here
    const flat = [];
    const handleFlat=(arr)=>{
        let counter = 0;
        while(counter<arr.length){
            const val = arr[counter];
            if(Array.isArray(val)){
                handleFlat(val);
            }else{
                flat.push(val);
            }
            counter++;
        }
    }
    handleFlat(arr);
    return flat;
}

console.log(flatten([1, [2, 3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2, 3], 4, [[[5]]]])); // [1,2,3,4,5]

//Christopher
function mode(arr) {
    // your code here

    let current;
    let currentCounter = 0;
    let mode;
    let modeCounter = 0;
    arr.sort();
    for(let i = 0; i<arr.length; i++){
        if(!current){
            current = arr[i]
        }
        if(current == arr[i]){
            currentCounter++;
        }
        else if(currentCounter>modeCounter){
            modeCounter = currentCounter;
            mode = current;
            currentCounter = 1;
            current = arr[i];
        }
        else {
            current = arr[i];
            currentCounter = 1;
        }
    }
    return mode;
}

//Kaysee
function flatten(arr) {
    let newArr = [];
    console.log(arr);
    while (arr.length > 0) {
        let currentElement = arr[0];
        if (Array.isArray(currentElement)) {
            // basically you are splicing one array into another
            [].splice.apply(arr, [0, 1].concat(currentElement));
            // arr.splice(0, 1, 2, 3);
        } else {
            newArr.push(currentElement);
            arr.splice(0, 1);
        }
        console.log(arr);
        console.log(newArr);
        console.log("=====================");

    }
    return newArr;
}

// console.log(flatten([1, [2,3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2,3], 4, [[[5]]]])); // [1,2,3,4,5]