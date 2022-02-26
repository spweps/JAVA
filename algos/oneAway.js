// There are 3 edits that can be done on a tring: add a acharacter, remove a character, or replace a character. Given 2 strings, write a function that checks if they are one edit or feweer away from eachother (see samples below)
function oneAway(str1, str2) {
    /// your code here
}

console.log(oneAway("hello", "eello")) // true
console.log(oneAway("hello", "eelloo")) // false 
console.log(oneAway("ello", "hello")) // true
console.log(oneAway("helllo", "hello")) // true
console.log(oneAway("hello", "helo")) // true
console.log(oneAway("hello", "hell")) // true
console.log(oneAway("hjllo", "helo")) // false