// const input=require("readline-sync");
// // let m=input.questionInt("enter members : ")
// let n=input.questionInt("enter op : ")
// // let obj={}
// let arr=[ { op: 0, donor: "Sarah", bloodType: "A+", date: "2024-02-18" },
//     { op: 0, donor: "David", bloodType: "AB-", date: "2024-02-20" },
//     { op: 0, donor: "UPENDRASINGH", bloodType: "O-", date: "2002-02-01" },]

// // for(let i=0;i<m;i++){
// // for(char of arr){
//         // let i=0
//     if(n==0)
//         {
//             newobj={}
//             newobj.op=n;
//     newobj.donor=input.question("enter name:");
//     newobj.bloodtype=input.question("enter a blood type : ");
//     newobj.date=input.question("enter date : ");
//     // arr[i]=obj
//     arr.push(newobj)
//     console.log(arr);
//         }
//        else if(n==1){
//             let k=input.question("enter a donor: ");
//             let index = arr.findIndex(d => d.donor === k);

//             if(index==1)
//                 {
//                     // delete char;
//                     arr.splice(index,1)
//                 }
//                 else{
    
//                     console.log('not Available');
//                 }
//                 // console.log(arr);
//         }
//         else if(n==2){
//             let blood=input.question("enter a bloodtype : ")
//         //   if  (char.bloodtype===blood){
//         let bl=arr.filter(k=> k.bloodType===blood);
//         if(bl.length>0){
//             console.log('Available'+" "+ blood);
//           }
//           else{
//             console.log('not Available');
//           }
//         //   console.log(arr);
//     }
//     // arr[i]=obj
//     // console.log(char);
//     // console.log(char.donor);
// // }
// // }
// // console.log(arr);