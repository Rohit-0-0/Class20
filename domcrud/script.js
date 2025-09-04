

console.log("start")
let h1tag=document.createElement("h1")
console.log(h1tag)
h1tag.innerText="this is heading 1"
console.log(h1tag.innerText)

let bub=document.createElement("p")
bub.innerText="this is paragraphhhhhh"


document.body.append(h1tag,bub);   //multiple ko apend kr skte h isme par apend child me single hi hoga (for now)


let divv=document.getElementById("ayx")
let p= document.createElement("p")
p.innerText = "this is paragraph";
console.log(p)


let bub2 = document.createElement("p"); 
bub2.innerText="kya haal h"
divv.appendChild(p,bub2)//ha yha p ek hi apend ho rha h 





