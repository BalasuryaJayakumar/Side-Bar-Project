const xbutton = document.querySelector(".sec_btn");
const linebutton = document.querySelector(".header_btn");
const main = document.querySelector(".main");


xbutton.addEventListener("click", (event) => {
    main.classList.toggle("main_none"); 
})

linebutton.addEventListener("click", (event) => {
    main.classList.add("main");
    main.classList.remove("main_none"); 
})