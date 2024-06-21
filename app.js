let a = document.getElementById("disco")
let addbutton = document.getElementById("btn")
let rebutton = document.getElementById("btn2")
let rembutton = document.getElementById("rem")
let togg = document.getElementById("tog")
let contain = document.getElementById("cont")


addbutton.addEventListener("click", () => {
    a.classList.add("design")

})

rebutton.addEventListener("click", () => {

    if(a.classList.contains("design")){
         a.classList.replace("design", "pro")
    }
    else if(a.classList.contains("blue")){
        a.classList.replace("blue", "design")
    }
    else if(a.classList.contains("pro")){
        a.classList.replace("pro","blue")
    }
   
})


rembutton.addEventListener("click", () => {

    if (a.classList.contains("design")) {
        a.classList.remove("design")

    }
    else if (a.classList.contains("pro")) {
        a.classList.remove("pro")
    }
    else {
        alert("no class is here")
    }
})

togg.addEventListener("click", () => {
    a.classList.add("design")
    a.classList.toggle("blue")
})

contain.addEventListener("click", () => {

    if (a.classList.contains("design")) {

        alert("design class active")
    }
    else if(a.classList.contains("pro")){
        alert("Pro Class Active")
    }
    else{
        alert("No Class is Here")
    }


})