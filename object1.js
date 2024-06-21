// let d1 = {
//     a: 100,
//     b: 200,
//     c: 300,
// };

// let d2 = {
//     a: 300,
//     b: 200,
//     d: 400,
// };0
// const input=require("readline-sync")
// let  object={
//     name:'laptop',
//     brand:'asus',
//     price:2500,
// }
// console.log(object);


// let  object={
//     name:'laptop',
//     brand:'asus',
//     price:2500,
// }
// console.log(object.name);


// let  object={
//     name:'laptop',
//     brand:'asus',
//     price:2500,
// }
// console.log(object['brand']);


// let  object={
//     name:'laptop',
//     brand:'asus',
//     price:2500,
//     book:{
//         name:'hindi',
//          class:'5th',

//     }
// }
// console.log(object.book.name);
// console.log(object.book['class']);

// Question 3: Looping Through Properties

// let  object={
    //     name:'laptop',
    //     brand:'asus',
    //     price:2500,
    //     book:{
    //         name:'hindi',
    //          class:'5th',
    
    //     }
    // }
    // for(i in object)
    //     {
    //         // console.log(i+':'+object[i]);
    //     }


// What is the difference between enumerable and non-enumerable properties in an object? How can you define a non-enumerable property?
// let  object={
//     name:'laptop',
//     brand:'asus',
//     price:2500,
//     book:{
//         name:'hindi',
//          class:'5th',

//     }
// }
// for(i in object)
//     {
//         console.log(i);
//     }


// How do you check if a property exists in an object, regardless of whether its value is undefined or not?


// let  object={
//     name:'laptop',
//     brand:'asus',
//     price:2500,
//     book:{
//         name:'hindi',
//          class:'5th',

//     }
// }
// console.log('name' in object);
// console.log('brand' in object );
// console.log('check' in object);


// let mob={
//     name:'redmi',
//     color:'white',
//     company:'mi',
//     price:1200,
//     quantity:1,
//      mob:function (){
//         return this.price * this.quantity
//     },
// }
// console.log(mob.mob());



// // Create a new dictionary to store the combined result
// let combinedDict = {};

// // Combine dictionaries and add values for common keys
// for (let key in d1) {
//     if (d2.hasOwnProperty(key)) {
//         combinedDict[key] = d1[key] + d2[key];
//     } else {
//         combinedDict[key] = d1[key];
//     }
// }

// for (let key in d2) {
//     if (!combinedDict.hasOwnProperty(key)) {
//         combinedDict[key] = d2[key];
//     }
// }

// console.log(combinedDict);
// Write a programme to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).


//  const input=require("readline-sync")
//  let n=input.questionInt("enter a num:")
// let d={}
// for(let i=1;i<=n;i++)
//     {
//         d[i]=i**2;
//     }
//     console.log(d);


// Write a program where it will combine given objects and give the result in 1 object, if it has the same properties add the values of it
// let d1={1:10,2:20}
// let d2={3:30,2:40}
// let d3={5:50,6:60}
// for(i in d1){
//     for(j in d2)
//         {
//             if(i==j)
//                 {
//                     d3[i]=d1[i]+d2[j]
//                     break;
//                 }
//                 else {
//                     d3[i]=d1[i];
//                     d3[j]=d2[j];
//                 }
//         }
// }
// console.log(d3);

// Write a program to take 1 input and check whether given input exists in our object or not, if it exists print exists or else prints not exist.

// const input=require("readline-sync")
// let n=input.question("enter a name:")
// let d={
//     name:'divya',
//     class:'coding',
//     age:19,
// }
// for(i in d)
//     {
//         // for(let x=0; x<d.length; x++ )
//         //     {

            
//         if(i==n)
//             {
//                 console.log('exist');
//                 break;
//             }
//             else{
//                 console.log('not exist');
//                 break;
//             }
           
//         }

    // }

// Write a program that calculates the sum of the values of an object
// let j={
//     data1:100,
//     data2:-54,
//     data3:247
// }
// let sum=0
// for(i in j)
//     {
//         sum+=j[i]
//     }
//     console.log(sum);
// Write a program that removes the first key and value of a nested object.

// let D={1:'Navgurukul',
//     2:'In',
//     3:{a:'Welcome',b:'To',c:'Dantewada'}
// }
// for(i in D)
//     {
//       if(( typeof D[i])==='object')

//         {
//             delete D[i]['c']
//         }
//     }
//     console.log(D);

// Write a program that removes the first key and value of a nested object.

// let kk=['one','two','three','four','five']
// let kkk=[1,2,3,4,5]
// let n={}
// for(i in kkk)
//     {
//         n[kk[i]]=kkk[i]
//     }
// console.log(n);

// let gg=['a','b','c','d','e','t']
// let ggg=[2,4,5,6,7,8]
// let k={}
// for(i in ggg)
//     {
//         k[gg[i]]=ggg[i]
//     }
//     console.log(k);

// Take 1 list and have some objects inside it as sample data given below, and create a new list with unique values and console the unique values list.

// let list =[{first:1,second:2,third:1,four:5,five:5,six:9,seven:7}]
// let fghj=[];
// for( i of list){
//     for(j in i){
//         if(!fghj.includes(i[j]))
//             {
//                 fghj.push(i[j])
//             }
//     }
// }
// console.log(fghj);

// let hh=[{a:3,b:4,c:4,d:2,e:3,f:5,g:6,h:7,i:8}]
// let dd=[];
// for(i of hh)
//     {
//         for(j in i)
//             {
//                 if(!dd.includes(i[j]))
//                     {
//                         dd.push(i[j])
//                     }
//             }
//     }
//     console.log(dd);

// Take 10 student inputs and marks and save them in an object.


// const input=require("readline-sync")
// let students=[]
// for(let i=0;i<10;i++)
//     {
//         let name=input.question("enter a name:");
//         let marks=input.questionInt("enter a num:")
//         students[name]=marks;
//     }
//     console.log(students);

// You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and store them in an object in key, value pairs.


// const input=require("readline-sync")
// let vb=[]
// let word=input.question("enter a name:")
// let output={}
// for(i of word)
//     {
//         if(vb.includes(i)){
//             output[i]=output[i]+1
//         }
//         else{
//             vb.push(i);
//             output[i]=1;
//         }
//     }
// console.log(output);

// let dd={
//     alex:['sub1','sub2','sub3',],
//     David:['sub1','sub2','sub4']

// }
// let count=0;
// for(i in dd){
//     for(a in dd[i]){
//         count++
//     }
// }
// console.log(count);

// let hh=[]

// let arr={a:50,b:40,c:59,d:100,e:20,f:30}
// for (i in arr )
//     {
//         if(arr[i]>arr[i+1])
//             {
//           hh[i]=arr[i+1]
//             }
//             console.log(hh);
//     }
//     // console.log(hh);

// *******************************************************************

// let bn={
//     a:3,
//     g:4,
//     k:9,l:91,po:-43,qw:-23,a:98,
// }
// sum=0
// for(i in bn){
//     sum+=bn[i]
// }
// console.log(sum);

// *******************************************************************
// let ss = []
// let ff = [{d:3, g:2, k:4, l:4, l:3, l:2, }]

// for(key of ff)
//     {
//     for(j in key)
//         {
//     if(!ss.includes(key[j]))
//         {
//             ss.push(key[j])
//         }
        
// }
// }
// console.log(ss);
// *******************************************************************

// sum=0
// let gh={dw:100,hj:560,kk:234,hn:34}
// for(i in gh)
//     {
//       sum+=gh[i]
//     }
// console.log(sum);
// *******************************************************************

// let hj={
//     s:45,
//     d:89,
//     f:98,
//     l:23,
// }
// for(i in hj)
//     {
//         // console.log(i);
//         console.log(hj[i]);
//     }

// *******************************************************************

// let dfg=function (){
//     sum=0
// let hj=[24,87,56,23,85]
//  for(i of hj)
//     {
//         // console.log(i);
//         sum+=i
        

//     }
   
//     return(sum);
// } 
//    console.log(dfg());


   
