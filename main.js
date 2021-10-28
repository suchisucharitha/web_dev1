var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");

var answer1 = document.getElementById("a1");
var answer2 = document.getElementById("a2");
var answer3 = document.getElementById("a3");
var answer4 = document.getElementById("a4");

var notclicked1 = true;
var notclicked2 = true;
var notclicked3 = true;
var notclicked4 = true;

q1.addEventListener("click", ()=>{
    if(notclicked1){
        answer1.classList.add("show");
        notclicked1 = false;
    }
    else {
        answer1.classList.remove("show");
        notclicked1 = true;
    }
})
q2.addEventListener("click", ()=>{
    if(notclicked2){
        answer2.classList.add("show");
        notclicked2 = false;
    }
    else {
        answer2.classList.remove("show");
        notclicked2 = true;
    }
})
q3.addEventListener("click", ()=>{
    if(notclicked3){
        answer3.classList.add("show");
        notclicked3 = false;
    }
    else {
        answer3.classList.remove("show");
        notclicked3 = true;
    }
})
q4.addEventListener("click", ()=>{
    if(notclicked4){
        answer4.classList.add("show");
        notclicked4 = false;
    }
    else {
        answer4.classList.remove("show");
        notclicked4 = true;
    }
})

var menuBtn = document.querySelector(".menu-btn");
var body = document.querySelector("body")
var btnNotClicked = true;

menuBtn.addEventListener("click",()=>{
    if(btnNotClicked){
        body.classList.add("clicked");
        btnNotClicked = false;
    }
    else {
        body.classList.remove("clicked");
        btnNotClicked = true;
    }
})