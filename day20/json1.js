// let obj1={ //js objects
// "name":"John",
// "age":30,
// "city":"NeW york",
    
// }
// //convert js object to json
// let json1=JSON.stringify(obj1)
// console.log(obj1)
// console.log(json1);
// //convert js to js object
// let json2='{"name":"john","age":30,"city":"new york"}'
// let obj2=JSON.parse(json2);
// console.log(json2);
// console.log(obj2);

//list json
const json1={
    "name": "john",
    "age":30,
    "city":"ranchi"

}
console.log(JSON.stringify(json1));
const json_l1=[1,2,3,4,5,6,7,8]
console.log(JSON.stringify(json_l1));

const json_list2=[{"name":"john","age":30,"city":"new york"},
    {"name":"john","age":30,"city":"new york"},
]
console.log(JSON.stringify(json_list2));
//nested json
const nested_object={"name":"john","age":30,"city":"new york","skills":["js","java"],
"address":{"street":"123 main st",
    "city":"any town",
    "state":"CA",
    
}
};
let nested_json=JSON.stringify(nested_object)
console.log(nested_json);
console.log(nested_object.name);
console.log(nested_object["age"]);

async function fetchData(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log(data.id)
    
    console.log(Object.keys(data)); //keys of the object 
    console.log(Object.values(data)); //values of the object
    console.log(Object.entries(data)); //entries(key-value)of the object
    

    
    
    
    
}
fetchData()







