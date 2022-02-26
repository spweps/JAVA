// Given two arrays of integers, neither of which are sorted, 
// find if the second array is a subset of the first array.
// In other words, check if all elements of the second array are in the first array. 
// The second array will always be smaller in size than the first array, 
// so you don't have to worry about that case, and the first array will always be non-empty.

function findSubset(arr, subset) {
    // your code here
}

console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,91,4])); // false

// return if 2 strings are permutations of eachother (true/false)
function checkPermutation(str1, str2) {
    // your code here
}

console.log(checkPermutation("aopple", "lepopa")); // true
console.log(checkPermutation("aopple", "asderb")); // false


// returns if a string is all unique characters or not
function isUnique(str) {
    // your code here
}

console.log(isUnique("hello")); // false
console.log(isUnique("bicker")); // true



//Dunavan
function findSubset(arr, subset) {
    // your code here
    let foundNums = 0;
    let numDict = {}
    for(let i=0; i<arr.length; i++){
        if(!numDict[arr[i]]){
            numDict[arr[i]] = 1;
        }
    }
    for(let j=0; j<subset.length; j++){
        if(numDict[subset[j]]){
            foundNums++;
        }
    }
    return foundNums === subset.length;
}

console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,91,4])); // false
console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,32,4])); // truie

// return if 2 strings are permutations of eachother (true/false)
function checkPermutation(str1, str2) {
    // your code here
    let str1Dict = {};
    let str2Dict = {};
    for(let i = 0; i < str2.length; i++){
        if(str2Dict[str2[i]]){
            str2Dict[str2[i]]++;
        }
        else{
            str2Dict[str2[i]]=1;
        }
    }
    for(let i = 0; i < str1.length; i++){
        if(str1Dict[str1[i]]){
            str1Dict[str1[i]]++;
        }
        else{
            str1Dict[str1[i]]=1;
        }
    }
    let str1DictKeys = Object.keys(str1Dict);
    let str2DictKeys = Object.keys(str2Dict);
    if(str1DictKeys.length !== str2DictKeys.length){
        return false;
    }
    for( key in str1DictKeys){
        if(str1Dict[key] !== str2Dict[key]){
            return false;
        }
    }
    return true
}

console.log(checkPermutation("aopple", "lepopa")); // true
console.log(checkPermutation("aopple", "asderb")); // false


// returns if a string is all unique characters or not
function isUnique(str) {
    // your code here
    let letterDict = {};
    for(let i=0; i < str.length; i++){
        if(letterDict[str[i]]){
            return false;
        }
        else{
            letterDict[str[i]] = 1;
        }
    }
    return true;
}

console.log(isUnique("hello")); // false
console.log(isUnique("bicker")); // true


//Jacob
function findSubset(arr, subset) {
    var dict = {};
    for (var i = 0; i < arr.length; i++){
        if (dict[arr[i]]){
            dict[arr[i]]++;
        }
        else dict[arr[i]] = 1;
    } //Sets up a dictionary keeping track of how many of each number in the first array
    for (var i = 0; i < subset.length; i++){
        if (!dict[subset[i]]){ //If there is no dictionary key for that subset value, return false
            return false;
        }
        else{
            dict[subset[i]]--; //Subtract one from the dictionary value
            if (dict[subset[i]] == -1){ //If we took more from the dictionary than exist in the first array, return false
                return false;
            }
        }
    }
    return true;
}

function checkPermutation(str1, str2) {
    if (str1.length != str2.length){
        return false;
    }
    var dict = {};
    for (var i = 0; i < str1.length; i++){
        if (dict[str1[i]]){
            dict[str1[i]]++;
        }
        else dict[str1[i]] = 1;
    } //Sets up a dictionary keeping track of how many of each letter in the first string
    for (var i = 0; i < str2.length; i++){
        if (!dict[str2[i]]){ //If there is no dictionary key for that str2 value, return false
            return false;
        }
        else{
            dict[str2[i]]-- //Subtract one from the dictionary value
            if (dict[str2[i]] == -1){ //If we took more from the dictionary than exist in the first array, return false
                return false;
            }
        }
    }
    return true;
}

function isUnique(str) {
    var dict = {};
    for (var i = 0; i < str.length; i++){
        if (dict[str[i]]){
            return false;
        }
        else dict[str[i]] = 1;
    }
    return true;
}