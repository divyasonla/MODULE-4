// function Vowel(text)
// {
//     let arr=[];
//     for(let key of text)
//         {
//             switch(key)
//             {
//                 case 'a':
//                     // console.log('$');
//                     arr.push("$")

//                     break;
//                     case 'e':
//                         arr.push("#")
//                         break;
//                         case 'i':
//                             arr.push("@")

//                             break;
//                             case 'o':
//                                 arr.push("!")

//                                 break;
//                                 case 'u':
//                                     arr.push("&")

//                                     break;
//                                     default:
//                                         arr.push(key);
//                                         break;
//             }

//         }
//         return arr.join("")
// }
// console.log(Vowel('hello divya'));

//////////////////////////////////////////////////////////////////////////////


// function firstwords (sentence)
// {
//      let word = sentence.split(" ")
//      let arr=[]
//      for(let i=0;i<word.length;i++)
//         {
//             arr[i]= word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();

//         }
//         return arr.join(" ")
// }

//////////////////////////////////////////////////////////////////////////////


// const input = require("readline-sync")
// let sentence= input.question("enter : ")
// console.log(firstwords(sentence));

// function revese(text)
// {
//     let  word=text.split(" ").reverse().join(" ")
//     return word
// }

//////////////////////////////////////////////////////////////////////////////

// const input = require("readline-sync")
// let text = input.question("enter: ")
// console.log(revese(text));

// let students=[
//     {name:'alice',age:20,grade:90},
//     {name:'john',age:19,grade:80},
//     {name:'bob',age:19,grade:90},
//     {name:'Eve',age:19,grade:70}

// ]
// function objectsearch(students,target){
//  let groos= students.filter( key => key.grade===target)
//  let ag=groos.map( student => student.name)
//  return ag;
// }
 
//////////////////////////////////////////////////////////////////////////////

// const input= require("readline-sync")
// let target = input.questionInt("enter: ")
// console.log(objectsearch(students,target));

//  function objectsearch(students,grade){
//      let groos= students.filter( student => student.grade===grade)
//      let ag=groos.map( student => student.name)
//      return ag;
//     }
     
//     let students=[
//         {name:'alice',age:20,grade:90,},
//         {name:'john',age:19,grade:80},
//         {name:'bob',age:19,grade:90},
//         {name:'Eve',age:19,grade:70}
    
//     ]
//     const input= require("readline-sync")
//     let grade = input.questionInt("enter: ")
//     console.log(objectsearch(students,grade));

//////////////////////////////////////////////////////////////////////////////


// const input = require("readline-sync")
// let n = input.questionInt("enter : ")
// let k=0 ;
// while(n>1)
//     {
//         if(n%2==0)
//             {
//                 n = n/2;
//             }
//             else {
//               n =  n*3+1;
//             }
//              k ++
//     }
//     console.log(k);

//////////////////////////////////////////////////////////////////////////////

// const input = require('readline-sync');
// let shopcart = [
//     {id:10,quantity:1},
//     {id:20,quantity:2},
//     {id:30,quantity:3}
// ];


// let checkid = input.questionInt('enter id search: ');
// let newQuantity = input.questionInt('enter quantity: ')
// function cart(){

//     for(let i=0; i<shopcart.length; i++) {
//         if(shopcart[i].id == checkid) {
//         if(shopcart[i].quantity != 0) 
//             {
//                shopcart[i].quantity = newQuantity;
//             } else {
//                 delete shopcart[i];

//                 i++;
//             }

//         } else {
//             shopcart.push({ id: checkid, quantity: newQuantity})
//             return shopcart;
//         }
      
//     }  
//     return shopcart;
 
// };
// console.log(cart());

//////////////////////////////////////////////////////////////////////////////

// let firstname =input.question("enter a firstname : ")
// let lastname =input.question("enter a lastname : ")
// let code = input.questionInt("enter a code : ")
// let phone = input.questionInt("enter a num :")
// let str = [firstname+' '+lastname+' '+code+'-'+phone]
// // let arr = str.split(" ")
// // console.log(str);

// for ( ch of str)
//     {
      
//     }
//     // console.log(arr);
// //     for(let i=0;i<str.length;i++)
//         {
//             if(arr[2]==91)
//                 {
//                     delete arr[2];
//                     arr.unshift("india")
//                 }
//                 else{
//                     delete arr[2];
//                    arr.unshift("nri")
//                 } 
//         }
//         console.log(arr);

//////////////////////////////////////////////////////////////////////////////


// let array=[
//     { name: "Rahul", email: "rahul@example.com", age: 35, city: "Bangalore" },
//     { name: "Priya", email: "priya@example.com", age: 28, city: "Mumbai" },
//     { name: "Rahul", email: "rahul@example.com", age: 30, city: "Chennai" }, 
//     { name: "Amit", email: "amit@example.com", age: 26, city: "Delhi" },
//     { name: "Priya", email: "priya@example.com", age: 28, city: "Delhi" } 
//   ]
  
 
// function removeduplicates(array){
//   for(let i=0 ; i<array.length ; i++)
//   {
//     let checkmail = array[i].email;
//     for(let j=i+1 ; j<array.length ; j++)
//     {
//       if(checkmail === array[j].email)
//         {
           
//             array.splice(array.indexOf(array[j]),1)
//             // array.splice(j,1)
//         }
        
//     }
// }
// return array
//   }
// console.log(removeduplicates(array));


////////////MODIFIYING QUANTITY//////////////////////////////////////////////////////////////////
// const input = require("readline-sync")
// let q = input.questionInt("enter quantity : ")
// let h =input.questionInt("enter id : ")
// let obj =[{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }]

//         for(let char of obj)
//             {
//                 for(key in char)

//                     {        if(q==0)
//                         {
//                             obj.splice(obj.indexOf(char),1)

//                         }         
//                            else if(char.id == h)
//                             {     
                                
//                                 char.quantity=q;
                                
//                             }
//                             else 
//                                 {
//                                     obj.push({id:h,quantity:q})
//                                    break;
//                                 }
                            
//                     }
//                     console.log(char);

//             }

//////////////////////////////////////////////////////////////////////////////
// Write a function "processData" that takes an array "nums" consisting of numbers and processes it according to a series of mathematical operations provided in another array called "operations". The operations array will be provided as input and will specify the operations to be performed on the array of numbers.


const input = require("readline-sync")
// function processData(n,m){
//     let crr=[]
//     let arr=[]
//     let brr=[]
//     let s;
//     let b;
//     let a;
//     let k;

// for(let i=0;i<n;i++)
//     {
//         arr[i]=input.questionInt("enter ele : ")
//     }
//     for(let i=0;i<m;i++){
// brr[i]=input.question("enter a key:")
//     }
// console.log(arr);
// console.log(brr);


//         for(let i=0;i<arr.length;i++)
//             {
//                 let result = arr[i]
//                 for(let j=0;j<brr.length;j++)
//                     {
//                 if(brr[j]=='add2'){
                    
//                     result += 2
//                 }
                
//               else {if(brr[j]=='mul3')
//                     {
//                         result *= 3

//                     }
                    
//                   else  if(brr[j]=='div5')
//                         {
                           
//                             result /= 5

//                         }
                        
//                       else  if(brr[j]=='sub1')
//                             {
                                
//                                 result -= 1

//                             }
//                         }
                            
                
//             }
//             crr[i]=result
//     }
//                 console.log(crr);

// }
// let n=input.questionInt('enter a num : ')
// let m = input.questionInt("enter a process : ")
// processData(n,m)

///19/////////SAME QUESTION BUT USING SWITCH CASES//////////////////////////////////////////////////////////////////


// const input = require("readline-sync")
// function processData(n,m){
//     let crr=[]
//     let arr=[]
//     let brr=[]
//     let s;
//     let b;
//     let a;
//     let k;

// for(let i=0;i<n;i++)
//     {
//         arr[i]=input.questionInt("enter ele : ")
//     }
//     for(let i=0;i<m;i++){
// brr[i]=input.question("enter a key:")
//     }
// console.log(arr);
// console.log(brr);



//         for(let i=0;i<arr.length;i++)
//             {
//                 let result=arr[i]
//                 for(let k=0;k<brr.length;k++)
//                     {
                       

//                         switch (brr[k]) {
//                             case 'add2':
                               
//                                 result +=2
//                                 break;
//                                 case 'mul3':
                                   
//                                     result *=3

//                                     break;
//                                     case 'div5':
                               
//                                 result /=5

//                                 break;
//                                 case 'sub1':
                             
//                                 result -=1

//                                 break;
                              

//                             default:
//                                 break;
//                         }
//                     }

//                     crr[i]=result

//     }
// // }
// console.log(crr);

// }
// let n=input.questionInt('enter a num : ')
// let m = input.questionInt("enter a process : ")
// processData(n,m)

//////17//////PRIME NUMBER COME THAT TIME ALICE AND ANTOHER BOB//////////////////////////////////////////////////////////////////

// Hackerman wants to know who is the better player between Bob and Alice with the help of a game.
// The game proceeds as follows:
// function prime(a,b){
// let c = a+b
// let count =0
// for(let i=1;i<=c;i++)
//     {
//         if(c%i==0)
//             {
//                 count++;
//             }
//     }
//     if(count==2)
//         {
//             console.log('Alice');
//         }
//         else{
//             console.log('Bob');
//         }

// }
// let a =input.questionInt("enter a 1st :")
// let b =input.questionInt("enter a 2nd :")

// prime(a,b)


/////14///////SAME QUESTION BUT USING SWITCH CASES//////////////////////////////////////////////////////////////////


// function findletters(text){
// let ddd=text.split("")
// let count=0
// let str;
// for(let i=0;i<ddd.length;i++)
//     {
//         if(ddd[i]=='a')
//             {
//                ddd[i]='c'
//                count++
//             }
//     }
// console.log(ddd.join(''));
// console.log(count);

// }
// let text=input.question("enter a text : ")
// findletters(text)

//13 Given three integers representing the lengths of the sides of a triangle, determine whether these sides can form a valid triangle or not.

// Triangle Validation Criteria:

// function triangle(a,b,c){
//     let add;
//     if(1<=a,b,c<=1000)
//         {
//          add=a+b;
//          if(add>c)
//             {
//                 console.log('yes');
//             }
//             else{
//             console.log('no');

//             }
//         }

// }
// let a = input.questionInt("anter a 1st :")
// let b = input.questionInt("anter a 2nd :")
// let c = input.questionInt("anter a 3rd :")
// triangle(a,b,c)

////////////SAME QUESTION BUT USING SWITCH CASES//////////////////////////////////////////////////////////////////


// function findlargest(text)
// {
//  let c=0;
//  let s=0;
//  let word=text.split("");
//  for(let i=0;i<word.length;i++)
//     {
//         // if(word[i]==1)
//         //     {
//         //         c++
//         //     }
//         //     else()
//         let num=word[i];
//         switch(num){
//             case num=='1':
//                 c++;
//                 break;
//                 case num=='0':
//                 s++;
//                 break;
//         }
//     }
//     if()

// }
// let text =input.question("enter a text :")
// findlargest(text)

/////3///////SAME QUESTION BUT USING SWITCH CASES//////////////////////////////////////////////////////////////////
// You are tasked with developing a system for processing binary strings efficiently. The system needs to perform the following operation:

// function binarysearch(words,start,end){

// let arr=words.slice(start, end)
// let name = arr.split("").reverse().join("")

// let brr= words.replace(arr,name)
// console.log(brr);
// // console.log(name);

// }
// let words=input.question("enter ele : ")
// let start=input.questionInt("entar index :")
// let end = input.questionInt("enter index : ")
// binarysearch(words,start,end)

// let marks=
//     // class:'8th',
//     [
//         {name:'uppi',marks:98,year:2019,subject:['sci','math','hindi']},
//         {name:'yummi',marks:68,year:2020,subject:['math','sci','com']},
//         {name:'divy',marks:78,year:2021,subject:['com','math','hindi'] },
//         {name:'shiv',marks:87,year:2022,subject:['math','sci','hindi']},

//     ]

//     function find(marks,target){
// let arr=[];
// // let brr=[]
// for( char of marks)
//     {
        
//         for(key of char.subject){
//             if(key===target)
//                 {
//                     arr.push(char.name)
//                 }
//         // }
//     }
// }

// console.log(arr);
//     }
//     const input=require("readline-sync")
//     let target=input.question("enter a : ");
//     find(marks,target)



// const input=require("readline-sync")

// function getFileType(filename)
// {
//     let n = filename.indexOf(".");
//     let brr=filename.slice(n).toLowerCase();
//     console.log(brr);

//            if(brr=='.doc'||brr=='.docx'||brr=='.pdf'||brr=='.txt'){
//             console.log('document');
//            }
//            else if(brr=='.mp3'||brr=='.wav'||brr=='.ogg'||brr=='.acc'){
//                        console.log('video');

//            }
//            else if(brr=='.jpg'||brr=='.jpeg'||brr=='.png'||brr=='.gif'){
//             console.log('image');

//            }
//            else if(brr=='.mp4'||brr=='.avi'||brr=='.mkv'||brr=='.wmv'){
//             console.log('video');
//            }
// else{
//     console.log("Unknown File Type");
// }
   
// }

// let filename=input.question("enter a ele : ")

// getFileType(filename)

// function update(text){

//     let words=text.split(" ")
//    let c=[]
//    let i=0;
// for(ele of words){
//         // if(ele[0]==='#'){
//         //     c[i]=ele.slice(1).toLowerCase()

//         // }
//       c[i]+=ele
// }
// return c;
// }
// let text=input.question("enter a text : ")

// console.log(update(text));

// const input = require("readline-sync")
// // const orders = [
// //     { orderId: 101, city: "Mumbai", productName: "Laptop" },
// //     { orderId: 102, city: "Delhi", productName: "Phone" }
// //   ];
// const orders = [
//     { orderId: 103, city: "Chennai", productName: "Tablet" },
//     { orderId: 104, city: "Chennai", productName: "Charger" },
//     { orderId: 105, city: "Kolkata", productName: "Keyboard" }
//   ];
  
  
//   function city(orders,target){
//     let  res=[]
//     // arr=[];
//     // let i=0
//     for(char of orders)
//     {
//         // console.log(char);
//         for(ele in char)
//         {
//             if(char.city===target)
//             {
//                 res.push(char.orderId);
//                 break;
//             }
//             // console.log(res);
//         }
//     }
//     return res

//   }
// // city(orders,target)
// let target=input.question("enter : ")
// console.log(city(orders,target));


// const input=require("readline-sync")

// const orders = [
//     { orderId: 101, city: "Mumbai", productName: "Laptop", paymentDetails: { method: "Credit Card", transactionId: "tx123", status: "Pending" } },
//     { orderId: 102, city: "Delhi", productName: "Phone", paymentDetails: { method: "PayPal", transactionId: "pay456", status: "Success" } }
//   ];


//   function updatePaymentStatus(orders, targetOrderId, newStatus){
//     let res=[]
//     for(char of orders)
//     {
//         if(char.orderId===targetOrderId){
        
//                 char.paymentDetails.status=newStatus;
//                 res.push(char);

//             }
            
//             res.push(char)
              
//         }
//    return res
//   }
//   let targetOrderId=input.questionInt("enter id : ")
//   let newStatus=input.question("enter a st : ")
//   console.log( updatePaymentStatus(orders, targetOrderId, newStatus));

// const input = require("readline-sync");
// let str=input.question("enter a words").split(" ");
// let arr=[]
// let i=0
// for(char of str){
//     if(char[0]==='#')
//         {
//      arr[i]=char.slice(1).toLowerCase()
//         }

// }
// console.log(arr);



// let text=input.question("enter : ")
// function findfrequencies(text){
//     let c=0
// let str=text.split("");
// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]==str[j]){
//             c++;
//             k=str[j]
//             if(k<str.length-1)
//                 {
//                     k=str[k+1];
//                     k++
//                 }
//         }
//         else{
//             c=c
//         }
//     }
//     console.log(str[i],";",c);
// }

// }
// findfrequencies(text)