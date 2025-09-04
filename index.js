// let a = document.getElementById("heading1")
// console.log(a)
// a.innerText = "Hello World";
// console.log(a)
// let b= document.getElementsByClassName("class1")
// b[0].removeAttribute()
// console.log(b[0].innerHTML);
// console.log(b[0])

//for accessin single element
let sele = document.getElementById("heading-one")
console.log(sele)

console.log(sele.innerText)
console.log(sele.textContent)

let tagn=document.getElementsByTagName("h1")
console.log(tagn)
console.log(tagn[0])
console.log(tagn[1].innerText)

let cls=document.getElementsByClassName("xyz")
console.log(cls)
console.log(cls[0].innerText)
console.log(cls[0].children[1].innerText)
console.log(cls[0].children[2])    //isme div ko le loya tha cls[0] krke fir usme jo 3rd p  tha usko select kra h children[2] deke
console.log(cls[0].children)       // isme jo children property h ye bhi ek html collection de deti h div ki length ka

let qs=document.querySelector("p")
console.log(qs)
console.log(qs.innerText)


let qsa=document.querySelectorAll("p")
console.log(qsa)

console.log(cls[0].getAttribute("class"))
cls[0].setAttribute("id", "xy");
console.log(cls[0].getAttribute("id"))
// cls[0].removeAttribute("id");
// console.log(cls[0].getAttribute("id")
console.log(cls[0].hasAttribute("id"))
cls[0].style.backgroundColor = "black";
console.log(cls)