let imgclick1 = document.querySelector(".click-img-del1");
let imgclick2 = document.querySelector(".click-img-del2");
let imgclick3 = document.querySelector(".click-img-del3");
let minibox = document.querySelector(".mn-bx1");
let minibox2 = document.querySelector(".mn-bx2");
let minibox3 = document.querySelector(".mn-bx3");
let topcenter = document.querySelector(".top-center");
let topbtn = document.querySelector(".nawbar-cl-btn");
let toplink = document.querySelector(".top-link");
let logo = document.querySelector(".nexcent-logo");
let wh1 = document.querySelector(".wh1");
let wh2 = document.querySelector(".wh2");
let wh3 = document.querySelector(".wh3");


imgclick1.addEventListener("click" , function() {
    minibox.classList.add("mn-bx-del");
    minibox2.classList.remove("mn-bx-del2");
    minibox3.classList.remove("mn-bx-del3");
})
imgclick2.addEventListener("click" , function() {
    minibox2.classList.add("mn-bx-del2");
    minibox.classList.remove("mn-bx-del");
    minibox3.classList.remove("mn-bx-del3");
})
imgclick3.addEventListener("click" , function() {
    minibox3.classList.add("mn-bx-del3");
    minibox.classList.remove("mn-bx-del");
    minibox2.classList.remove("mn-bx-del2");
})
// ______________________________________________
// ______________________________________________
topbtn.addEventListener("click" , function() {
    topcenter.classList.toggle("top-center2");
    toplink.classList.toggle("top-link2");
    logo.classList.toggle("nexcent-logo2");
    wh1.classList.toggle("whx");
    wh2.classList.toggle("whx");
    wh3.classList.toggle("whx");
})