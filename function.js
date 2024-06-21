// function Myfunction(a,b){
// return a+b;
// console.log(a+b);
// }
// Myfunction()

// const { getRawInput } = require("readline-sync");

// function Myfunction(a,b){
//     console.log(a+b);
//         // return ;
// }
// let sum =Myfunction(3,5)
// Myfunction()



// Function Declaration
// A function can be declared using the function keyword, followed by a name, parentheses for parameters, and curly braces for the function body. For example:

// function person(name){
// console.log('hello '+name);
// }

//  person('divya')

// Function Expression
// Functions can also be defined as expressions. These functions can be anonymous or named:
// let lll=function(name){
//     console.log('hello welcome '+name);
// }
// lll('sonla')

// Returning a Value::::::::::Functions can return a value using the return statement. If a function does not have a return statement, it returns undefined by default.

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5,10));




// Arrow Functions
// Introduced in ES6, arrow functions provide a shorter syntax. They are always anonymous:



//  let  person = (name) =>{
//  console.log('hello ' + name);
//  }
// person('divya')

// Single-expression arrow function without explicit return
// const add = (a, b) => {
//     return a+b;
// }

// console.log(add(2, 3)); // Output: 5


// const person = (name,age)=>
//     ({
//     name:name,age:age
// })
// console.log(person('divya' ,18));

// function greet(name,message,age)
// {
//     console.log(message+','+name+','+age);
// }
// greet('divya','hello', 18)


// let gh={
//     firstname:'divya',
//     lastname:'sonla',
//     age:18,
//     ser:function()
//     {
//         return this.firstname+' '+this.lastname;
//     }
// }
// // console.log(gh.ser)
// gh.ser()


// function person(language){
//     console.log('hello my name '+ this.name+" "+ 'I speak this '+language);
// }
// person2={name:'divya'}
//  person.call(person2,'hindi')

//Object Method Context

// let obj={
//     value:56,
//     value2:3,
//     balls:'balls',
//     showcase:function()
//     {
//         console.log( this.value+this.value2+" "+this.balls)
//     }
// };
// obj.showcase()

//Global Context

// function div(){
//     console.log(this);

// }
// div()

//Constructor Context
// function myname(){
//     this.prop='some value';
// }
// const instance= new myname();
// console.log(instance.prop);


// let obj={
//     value:34,
//     showcase:function(){
//         console.log(this. value);
//     },
//     norfunction:() => {
//         console.log(this.value);
//     },
// }
// obj.showcase()
// obj.norfunction()

// function square(n){
//     return n*n
// }
// console.log(square(4));
//  let squarearrow=n=>n*n
//  console.log(squarearrow(4));


//******************************************************* */

// function countVowels (str) {
//     let count =0;
//     for (let char of str)
//         {
//             if(char==='a' || char==='e' || char==='i' || char==="o" || char==='u')
//                 {

//                 count++
//                 }
//     }
//     console.log(count);
// }
// const input=require("readline-sync")
// let name=input.question("enter a name : ")
// countVowels(name)

//******************************************************* */


// let vowel = (str) => {
//     let count=0;
//     for(let char of str)
//        {
//            if( char==='a' || char==='e' || char==='i' || char==='o'|| char==='u')
//                {
//                    count++
//                    console.log(char);

//             }
//     }
// console.log(count);
// }
// const input=require("readline-sync")
// let name =input.question("enter a name : ")
// vowel(name)

//******************************************************* */

// let arr  = ['mummy', 'papa', 'bhai']
// arr.forEach((val,ind)=>{
//     console.log(val.toUpperCase(),ind);
// })


// const input=require("readline-sync")
//  let name = input.question("enter a name")
// arr.forEach()

//******************************************************* */


// let arr = [1,2,3,4,5]
// arr.forEach((val) => {
//     console.log(val*val);
// })
// let arr = [3,5,6,7,9];

// let newarr = arr.map((val) => {
//     return val*val;
// })
// console.log(newarr);

//******************************************************* */


// function abc(a,b,c,d){
//     console.log(a*b+c+d);
// }
// abc(5,4,2,6)

//******************************************************* */


//  let arr=[1,2,3,4,5]
// let fgh = arr.reduce((res,rr) => {
//     return res * rr
// })
// console.log(fgh);

//***************largest****************************************
//   let arr=[1,9,5,3,7]
// let fgh = arr.reduce((res,rr) => {
//     return res >  rr ? res : rr
// })
// console.log(fgh);

//***********smallest********************************************

//   let arr=[1,9,5,3,7]
// let fgh = arr.reduce((res,rr) => {
//     return res <  rr ? res : rr
// })
// console.log(fgh);

//******** FILTER METHOD*********************************************** */


// let arr =[23,65,44,77,88]
// let sdf = arr.filter((val) => {
//     return  val >= 44 
// })
// console.log(sdf);

//******************************************************* */

// const input = require("readline-sync")
// let n = input.question("enter a number : ")
// let arr= [];
// for(let i=1 ; i<=n ; i++)
//     {
//         arr[i-1] = i;
//     }
//     console.log(arr);
//    let brr= arr.reduce((prev,curr) => {
//         return prev + curr ;
//     })
//     console.log(brr);
//     let crr = arr.reduce((prev,curr) =>
//         {
//           return prev * curr
//     } )
    // console.log(crr);



   


    // const person = {
    //     firstName:"John",
    //     lastName: "Doe",
    //     fullName: function () {
    //       return this.firstName + " " + this.lastName;
    //     }
    //   }
      
    //   const member = {
    //     firstName:"Hege",
    //     lastName: "Nilsen",
    //   }
      
    // //   let fullName = person.fullName.bind(member);

    //   console.log(person);


    // let person ={
    //     name:'divya',
    //     lastname:'sonla',
    //     greet:function(greeting) {
    //         console.log(greeting+' '+this.name);
    //     }
    // };
    // let anotherperson = {
    //     name:'annu'
    // };
    // person.greet.call(anotherperson,'hello') 

// function product(n){
//   if(n==2)
//     {
//         return 1;
//     }
//     return n * product(n-1);

// }
//     console.log( product(5))


// function product (n,m,o)
// {
//     return n*m*o
// }
// console.log(product(2,4,6));

// function add(a,b,c,d){
//     return a-b+c-d
// }
// console.log(add(2,3,4,5)); 

// function addsum(a,b)
// {
//     return a+b;
// }
// console.log(addsum(4,5));


// function avarage(math,sci){
//     return (math+sci)/2
// }
// console.log(avarage(25,30));


// function arrinserting(arr)
// {
//     a=5,
//     arr.push(a);
//     return arr;
// }
// console.log(arrinserting([1,2,3,4]));

// let isEqual=function(tr1,tr2)
// {
// }
// isEqual('divya','divya')


// Write a function named checknumberslist which takes two lists of integers and checks the numbers of the same index numbers whether they both are even or not. For checking both even or not you can use the function written in the previous question.    console.log(tr1===tr2)

// function checknumber(para1,para2)
// {
//     for(i of para1 )
//         {
//             if(i%2==0)
//                 {
//                     console.log('even');
//                 }
//                 else{
//                     console.log('odd');
//                 }

//         }
//         for(j in para2)
//             {
//                 if(j%2==0)
//                     {
//                         console.log('even');
//                     }
//                     else{
//                         console.log('even nhi hai');
//                     }
//             }

// }
// checknumber([3,6,8,12],[48,60,35,16])


// function checkeligible(age){
//     for ( i of age)
//         {
//             if(i < 18)
//                 {
//                     console.log('not eligible');
//                 }
//                 else if(i > 18)
//                  {
//                     console.log('you are eligible');
//             }
//             else{
//                 console.log('you are eligible');
//             }
//         }
// }
// checkeligible([17,20])

// Write a function named perfect() which takes 1 parameter and checks that given parameter is a perfect number or not. Perfect number means we will count the factors of a given number including 1 but you need to exclude the own number as its factor.
// function perfact(n)
// {
//     let sum=0
//     for(let i=1; i<n; i++)
//         {
//             if(n%i==0){
//                 sum+=i
//             }

//         }
//         if(sum==n)
//             {
//                 console.log('perfact');
//             }
//             else {
//                 console.log('not perfact');
//             }
// }
// perfact(12)


// Write a function named average which takes 3 numbers and prints the sum of 3 numbers and the average of 3 numbers.


//  function average(a,b,c)
//  {
//     let sum = a+b+c;
//      let avarage = sum /3
// console.log(sum);
//     return avarage ;
//  }

// const input=require("readline-sync")
// let a=input.questionInt("enter a num:")
// let b=input.questionInt("enter a num:")
// let c=input.questionInt("enter a num:")
// console.log(average(a,b,c));

// Write a function named showNumbers() which takes 1 argument named limit and program starts from o to limit and checks the numbers in between 0 to limit and prints whether the number is Even or odd like the below.
// function shownumber(n){
//  for(let i=0; i<=n; i++)
//     {
//         if(i%2==0)
//             {
//                 console.log(i,'even');
//             }
//             else{
//                 console.log(i,'odd');
//             }
//     }
// }
// const input = require("readline-sync")
// let n = input.questionInt("enter a num:")
// shownumber(n)


// Write a function named multiplesOfNumbers which takes an argument as limit, and runs a loop from o to that limit and prints the multiples of 3 and 5. Like the below.


// function multiplesOfNumber(n){
//     let sum = 0
//     for(i=1; i<=n; i++)
//         {
//             if(i%3==0 || i%5==0)
//                 {
//                    sum += i
//                     // console.log(i);
//                 }
                


//         }
//         console.log(sum);
// }
// const input = require("readline-sync")
// let n = input.questionInt("enter a num:")

// multiplesOfNumber(n)


// Write a function named license_checker that checks drivers speed, this function needs to take a parameter named speed.


//  function licensechecker(n)
//  {
//    let s=0;
//    let k=0;
//     if(n<=70)
//         {
//             console.log('ok');
//         }
//         else if(n>70)
//             {
//               s = n-70;
//               k = s/5
//               if(k<12)
//                 {
//                     console.log(k);
//                 }
//                 else 
//                 {
//                     console.log('license suspended');
//                 }
//             }
//  }

//  const input = require("readline-sync")
// let n = input.questionInt("enter a num:")

// licensechecker(n)


/////////////CHECK LENGTH ON TWO NAME  /////////////////////////////////////////////////////////////////
// function equallength(para1,para2)
// {
//    if(para1.length === para2.length)
//     {
//         console.log(para1);
//         console.log(para2);

//     }
//     else if (para1.length > para2.length){
//         console.log(para1);

//     }
//     else {
//         console.log(para2);

//     }
// }
//  const input = require("readline-sync")
// let para1 = input.question("enter a name:")
// let para2 = input.question("enter a name:")

// equallength(para1,para2)

// Write a function squaresofnumbers which takes a number as a parameter, and runs a loop from 1 to the given number, and makes the number and square of a number as key, value pair.
// function squaresofnumbers(n)
// {
//     for(let i=1; i<=n; i++)
//         {
//          console.log(i,i**2);
//         }
// }
//  const input = require("readline-sync")
// let n = input.questionInt("enter a num:")

// squaresofnumbers(n)

// let double =  (x) => {
// return x*2
// }
// console.log(double(2));
// Write a function maxOfArray that takes an array of numbers and returns the maximum number using the spread operator.

// function maxOfarray(n)
// {
//     let i=0
//     let max=n[i]
//  for(let i=1;i<n.length;i++)
//     {
//        if(n[i]>max)
//         {
//             max=n[i]
//         }

//     }
//     return max;

// }
// console.log(maxOfarray([1,2,3,5,9,4]));

// const input = require("readline-sync")
// function arrmax(arr)
// {
//    let brr = arr.split('')
//     if(arr.length === 0){
//         return undefined;
//     }
//     let max = arr[0];
//     arr.filter((value)  => {
//         if (value > max)
//             {
//                 max = value
//             }
//             // return false;
//     });
//     return max;
// }
// let arr = input.questionInt("enter a num:")
// console.log(arrmax(arr))












///////ARRAY SUM///////////////////////////////////////////////////////////////////////

// const input=require("readline-sync")

// function array(a,callback){
//     let arr=[]
//   for(let i=0; i<a; i++)
//     { 
//         let ele=input.questionInt("enter a num:")
//         arr.push(ele)
//     }
//     return callback (arr);
// }

// function sumarr(arr)
// {
//  let sum=0;
//  for(let i=0; i<arr.length; i++)
//     {
//         sum+=arr[i]
//     }
//     return sum;
// }
// let a = input.questionInt("enter a no:")
// console.log(array(a,sumarr));

/////////FIND PRIME NUMBERS IN 100/////////////////////////////////////////////////////////////////////////////
// const input=require("readline-sync")

// function array(a,callback){
//     let arr=[]
//   for(let i=0; i<a; i++)
//     { 
//         arr[i]=i+1
//     }
//     return callback (arr);
// }


// function findprime(arr)
// {
//     let brr=[]
    
//      for(let i=1; i<arr.length; i++)
//         { 
//             let s=0;
//              for(let j=1; j<=arr[i]; j++)
//                 {
//                     if(arr[i]%j==0)
//                         {
//                             s++
//                         }
//                 }
//                 if(s==2)
//                     {
//                         brr.push(arr[i]);
//                     }
                   
//         }
//         return brr

// }
// let a = input.questionInt("enter a no:")
// console.log(array(a,findprime));

////////SORTING ALPABETS///////////////////////////////////////////////////////////////////


// function sortString(para1)
// {
//     let arr=para1.split('');
//     arr.sort()
//     let sorted = arr.join('');
//     console.log(sorted);
// }
// sortString('divya')

////////FIND MAXIMUM LENGTH OF WORDS///////////////////////////////////////////////////////////////////
// const input = require("readline-sync")
// function string(str){
// const words = str.split(' ');
// let result ='';
// for( let word of words)
//     {
//         if(word.length > result.length)
//             {
//                 result = word
//             }
//     }
//  return result
// }
// let str =input.question("enter a words:")
// console.log(string(str))

//#####isAinagram most important quesiton in function/////////////////////////////////////////
// const input = require("readline-sync")

// function dfgh(text,text2)
// {
//     let gnm=[]
//     let bnm = text.split('')
//     let anm = text2.split('')
//     if(bnm.length == anm.length)
//         {
            
//          for(let i=0; i<bnm.length; i++){
//             for(let j=0; j<anm.length; j++)
//                 {
//                     if(bnm[i]==anm[j])
//                         {
//                           gnm [i] = anm[j]
//                         }
//                 }
//          }
//          if(bnm==gnm)
//             {
//                 console.log('yes');
//             }
//             else
//             {
//             console.log('no');
//             }
//         }
//         // return gnm
// }
// let text = input.question("enter a text:")
// let text2 = input.question("enter a text:")
// dfgh(text,text2);

//////////ISANAGRAM////////////////////////////////////////////////////////////

// function isAnagram(str,str1)
// {
//     let sorted = str.split('').sort().join('')
//     let sorted1 = str1.split('').sort().join('')
//  return sorted === sorted1
// }
// console.log(isAnagram('listen','sliten'));


//////////Prefix////////////////////////////////////////////////////////////
// function prefix(str){
//     if(str.length === 0) return "";
//     let arr = str[0];
//     for( let i=1 ;i<str.length; i++)
//         {
//             while (str[i].indexOf(arr)!==0)
//                 {
//                     arr = arr.substring(0,arr.length-1)
//                     if(arr === "")return ""
//                 }
//         }
//         return arr;
// }
// // const input = require("readline-sync")
// let str = ['flower','flow','flight']
// console.log(prefix(str));

