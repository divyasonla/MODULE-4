

// let fruits = ['apple', 'banana', 'orange'];
// let index = fruits.indexOf('banana'); // index is 1
// console.log(index);

// What is the length of the string "apple"?

// let fruits ='apple';
// let index=fruits.length
// console.log(index);

// How would you get the first character of the string "banana"?

// let fruits = 'banana';
// let index = fruits.charAt(fruits)
// console.log(index);

// How can you change the string "hello world" to all uppercase letters?

// let greet = 'hello world'
// let greet1 = greet.toUpperCase(greet)
// console.log(greet1);

// let str='hello'
// console.log(str.length);

// let ab = 'javascript'
// console.log(ab.charAt(3));

// let m = 'Mango';
// // let k = 'king';
// console.log(!m.includes('n'));

// let m ='apna kam karo'
// let s =m.split("")
// console.log(s);


////////trim//////////////////////////
// let m ='apna kam karo   '
// // console.log(m.trim());

// ////////trim//////////////////////////
// // let a = 'red car is Red road in red light'
// // console.log(a.replace(/red/g,'blue'))//regular expression is most important
// console.log(m.slice());

// // let c=m.splice(1,1,1)
// // console.log(m.splice(1,2,'h'));



// Given the string "I love programming", how would you reverse the order of the words to get "programming love I"?

// const input=require("readline-sync")
// function reverse(words,callback){
//    let arr=[]
//    for(let i=0; i<words; i++)
//     {
//          arr[i]= input.question("enter a name:")
//     }
//     return callback(arr)
// }
// function rev(arr)
// {


// arr.reverse(arr)
// return arr
// }
// let words = input.questionInt("enter a num:")
// console.log(reverse(words,rev));




// let count=0
// let letters = 'banana'
// for(char of letters)
//     {
//       if(char=='a')
//         {
//          count++
//         }
//         else {
//             count=count
//         }
//     }
//     console.log(count);

// f you have the string "abracadabra", how would you count the number of times the letter 'a' appears in it?

// const input = require("readline-sync")
// function letters(names,callback){
//  let arr=[];
//  let str=''
//  for(let i=0 ; i<names; i++)
//     {
//        arr[i]=input.question("enter a letter:-")
//         str+=arr[i]
//     }
//     return callback (str)
// }
// function hhh(str){
//    let  count=0
//    for(char of str)

//     {
//         if (char=='a')
//             {
//                 count++
 
//             }
//             else{
//                 count=count

//             }
//     }
//     return count
// }
// let names= input.questionInt("enter a num:").split('');
// console.log(letters(names,hhh));

//******************************************************************** */


// const input = require('readline-sync');
// let name = input.question('enter string: ').split('');
// console.log(name);
// target = input.question('search  letter:')
// let count=0
// for(char of name)
//     {
//         if(target == char)
//             {
//                  count++

//             }
//             else{
//                 count=count

//             }
//     }
//     console.log(count);

//******************************************************************** */

// const input = require("readline-sync")
// let words = input.question("enter a word:-")
// let name=words.substring(1,4)
// console.log(name);

//******************************************************************** */
// const input = require("readline-sync")
// let words = input.question("enter a word:-")
// let name=words.slice(7)
// console.log(name);

// const readlineSync = require('readline-sync');

// function binarySearch(words, start, end) {
//     let name = words.slice(start, end); // Use start and end to slice the array
//     // name.reverse(); // Reverse the sliced array
//     console.log(name);
// }

// let words = readlineSync.question("Enter elements separated by space: ")
// let start = readlineSync.questionInt("Enter start index: ");
// let end = readlineSync.questionInt("Enter end index: ");

// binarySearch(words, start, end);

