let arr1=[1,2,3,4,5,6,7,'hello']
arr1.splice(4,2);
console.log(arr1);
arr1.splice(2,0,'bye') // to delte 
console.log(arr1);


//some()
let arr2=[1,2,3,4,5,6,7,'hello']
let output=arr1.some(
    (e)=>e%2==0
)
console.log(output);
// findIndex() method returns index of first elemnt in array that satisfies provided testing function,-1 returned 

// syntax:

let arr3=[1,2,3,4,5,6,7,'hello']
let output2=arr3.findIndex(
    (e)=>e%2==0
)
console.log(output2);


//reverse method
console.log(arr3.reverse()); //back to original 

arr3.reverse()
console.log(arr3);
//toString() method
let arr4=[10,20,30]
// console.log(arr4.toString());
let outpust=arr4.toString()
console.log(arr4);
console.log(outpust);
console.log(typeof outpust);
let arr5=['hello','priti']
console.log(arr5.toString());
//join method
console.log(arr5.join('-❌'));
let arr6=[10,20]
let op=arr6.join('')
console.log(op);

// slice()
// -returns shallow copy of portion of an array into new array object selected
//edn not included onl  start
// syntax:
// Array.slice(start,end)
//start is mandate 
// end se n-1 ka print hoga
let arr7=[12,20,30,40,50]
let output2c=arr7.slice(2)
console.log(output2c);


//forEach() method
// --executes a provided function once for each array
//doesnt return vale
// syntax:
// arr1.forEach(
//     {
//         (cuurvalu,index,array)
// =>   {

// } }
// )
let arr8=[10,20,30,40]
arr8.forEach(
    (element,index,array)=>{
        console.log(`element:${index}-index:${index}`);
        
    }
)

//for of loop
let ar1=[10,20,30]
for(let e of ar1){
    console.log(e);
    
}
//for in 
for(let index in ar1){
    console.log(index,'-',ar1[index]);
    
}
//indexOf
//delete
delete ar1[1]
console.log(ar1);


// fill()
// -it returns modifed array 
// syntax:
// array.fill(value,start,end)

let arr12=[10,20,30,40,50]
arr12.fill(100,4,5)
console.log(arr12);
arr12(100,5)
console.log(arr12);


//padStart()
// -pads the current string with another string until it reaches the specified length
// -it returns padded string 

// syntax:
// string.padStart(targetlength,padString)











