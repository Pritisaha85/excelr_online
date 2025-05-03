const json1={
    "name":"priti",
    "city":"123456789"
}
const json2={
    "email":"abc@gmail.com",
    "phone":"4444444"
}
const json12={
    "salary":4444444,
    "comany":"TCS"
}
console.log(json1);
console.log(json2);
// const merged_json=Object.assign(json1,json2)
// console.log(merged_json);

// const merged_json1={...json1,...json2,...json12}
// console.log(merged_json1);
json1["phone"]=json2.phone;
delete json2.phone
for(let key in json1){
    console.log(key+" " +json1[key]);
    
}

Object.keys(json1).forEach(key=>{
    console.log(key+""+json1[key]);
    
})
Object.entries(json1).forEach(key=>{
    console.log(key+""+json1[key]);
    
})
Object.values(json1).forEach(value=>{
    console.log(value);
    
})

//destruturing the object

const user={
    "name":"priti",
    "age":"22",
    "city":"new york",
    "skills":["js","python","java"]

}
//destructing obj
const {name,age}=user;
console.log(name);
console.log(age);

//desturcting and renaming the obj
const{name:userName,age:userAge}=user

console.log(userName);
//desturcting and adding default value to the object
const{country="india"}=user
console.log(country);



