var startbutton = document.querySelector("#start")
var questionbutton = document.querySelector("#buttons")
var wrapper = document.querySelector(".wrapper")

console.log(questionbutton)

startbutton.addEventListener("click",function(){
    console.log("hello")
    questionbutton.style.display="block"
    wrapper.style.display="none"
})

