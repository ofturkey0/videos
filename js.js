var menu = document.querySelector(".menu");
var yukle = document.querySelector(".uploud");
var sidebar = document.querySelector(".sidebar");
var conold = document.querySelector(".a")


menu.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    conold.classList.toggle("b-container")
}