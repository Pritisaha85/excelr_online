//accesing element with getElementById

let heading1=document.getElementById('heading1');
heading1.style.color='red'
console.log(heading1);
//acceessing elemnt with getElementByClassName

let heading2=document.getElementsByClassName('heading2')
for(let e of heading2){
    e.style.color='green'
}
console.log(heading2);
//by tags name accesing selemnt
let heading3=document.getElementsByTagName('h3')
for(let e of heading3){
    e.style.color='blue'
}
//access using queryselector
let p=document.querySelector('.p1')
p.style.color='red'

//queryseletcorALL
let plist=document.querySelectorAll('.p1')

for(let e of plist){
    e.style.fontSize='20px'
    e.style.color='purple'
}
//creation of element with createelement()
let pCreate=document.createElement('p');
pCreate.textContent='this is a new paragraph created by using text property'
;
let container=document.querySelector('.container')
container.appendChild(pCreate)