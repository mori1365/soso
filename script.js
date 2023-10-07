let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
}
window.onscroll = ()=>{
    menu.classList.remove("bx-x-circle");
    navbar.classList.remove("open");
}

let head = document.querySelector(".head");
head.onclick = ()=>{
    window.location.href = "https://mymaral.com/wp-admin/edit.php?post_status=wc-processing&post_type=shop_order";
}