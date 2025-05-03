let arr1=[10,20,30]
console.log(arr1);
let arr2=['hlo','world','this','is','array']
console.log(arr2);
console.log(arr2[1]);
console.log(arr2[0]);
console.log(arr1.length);
//using  new keyword
let arr3=new Array(10,30,40,50)
console.log(arr3);
let arr4=new Array(5);
console.log(arr4);
console.log(arr4.length);
let arr5=new Array(1);
console.log(arr5);

let arr6=Array.of('developer')
console.log(arr6);

//accesing values/elemnts/items of array 

let arr7=[10,20,30]
console.log(arr7[0]);
arr7[1]=10000;

//adding values to array
let arr8=['this','is','array','session',1,2,8,9,8]
console.log(arr8.length);
arr8[9]=1000
arr8.push();
arr8.unshift('hello') //add elemnt at the beginneig//
console.log(arr8);
arr8.pop()
console.log(arr8);
arr8.shift()
console.log(arr8);
//at method
let arr9=[10,20,30,40,50]
console.log(arr9.at(0));
console.log(arr9.at(-1));
console.log(arr9.at(8));

let arr10 = [10, 20, 30, 40, 50];
let squareArr = arr10.map(num => num * num);
console.log("Original Array:", arr10);
console.log("Squared Array:", squareArr);

let arr12 = ['this', 'is', 'array'];
let arr13 = arr12.map(e => e.toUpperCase());
console.log("Uppercase Array:", arr13);

let array1=[10,20,30,15,17,18,21]
// let arrays2=arr1.filter(
//     (e,index,arr1)=>{
//         return e%2==0;
//     }
// )
let array2=array1.filter(num=>num%2==0)
console.log(array2);



let inputarr=[6,7,8,9,10]
let outputarr=inputarr.map(e=>e*e).filter(e=>e%2!=0);
console.log(outputarr);
let num=[1,2,3,4,5]
let num5=num.reduce((accumulator,currentValue) => {
    return accumulator+ currentValue;
},0);
console.log(num5);

let nums1=[1,2,3,4,5]
console.log(nums1.includes(2)); //true
console.log(nums1.includes(2,0)); //true
console.log(arr1.includes(2,1)); //true
console.log(nums1.includes(2,2)); //false 

// let ar=[1,2,3,4,5]
// ar.find(e,indexedDB,arr1)=>{
//     return e%2==0;
// }
// console.log(output);

let ar1=[1,2,3,4,5,'hello','world']
let output=ar1.find((e,indexedDB,arr1)=>{
    return typeof e=='string';
})
console.log(output);

let ars1=[1,2,3,4,5,'hello','world']
let outpeut=ar1.find((e,index,arr1)=>{
    return typeof e=='number';
})
console.log(output);












