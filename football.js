let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
let closer = document.querySelector(".close");
menu.onclick = () =>{
    menu.style.display = "none";
    navbar.style.right= "0px";
    closer.style.display = "block";
}
closer.onclick = () =>{
    closer.style.display = "none";
    navbar.style.right= "-130px";
    menu.style.display = "block";
}
window.onscroll = () =>{
    closer.style.display = "none";
    navbar.style.right= "-130px";
    menu.style.display = "block";
}