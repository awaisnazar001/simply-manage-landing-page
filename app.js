var open = document.getElementById("open-btn");
var close = document.getElementById("close-btn");
var menu = document.getElementById("menu")

open.addEventListener("click", () =>  {
    open.classList.remove("block");
    open.classList.add("hidden");
    close.classList.remove("hidden");
    close.classList.add("block");
    menu.classList.add("block");
    menu.classList.remove("hidden");

});

close.addEventListener("click", () =>  {
    open.classList.remove("hidden");
    open.classList.add("block");
    close.classList.remove("block");
    close.classList.add("hidden");
    menu.classList.add("hidden");
    menu.classList.remove("block");
});